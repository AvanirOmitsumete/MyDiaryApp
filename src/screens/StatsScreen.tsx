import { useState, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import Header from '../components/Header';
import { DiaryEntry } from '../types';
import { getEntries } from '../data/diaryStore';

export default function StatsScreen() {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  // Automatically refresh when switching to this analytics tab
  useFocusEffect(
    useCallback(() => {
      setEntries(getEntries());
    }, [])
  );

  const geotaggedCount = entries.filter((e) => e.latitude !== undefined).length;

  return (
    <View style={styles.container}>
      <Header title="Journal Insights" subtitle="Analytics & Geotagged Records" />
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Stat Card 1 */}
        <View style={styles.statCard}>
          <Ionicons name="book-outline" size={36} color="#0284c7" />
          <Text style={styles.statNumber}>{entries.length}</Text>
          <Text style={styles.statLabel}>Total Memories Saved</Text>
        </View>

        {/* Stat Card 2 */}
        <View style={styles.statCard}>
          <Ionicons name="location-outline" size={36} color="#10b981" />
          <Text style={styles.statNumber}>{geotaggedCount}</Text>
          <Text style={styles.statLabel}>GPS-Tagged Entries</Text>
        </View>

        {/* Geotagged Activity List */}
        <Text style={styles.sectionTitle}>Recent Auto-Captured Stamps</Text>
        {entries.map((item) => (
          <View key={item.id} style={styles.logItem}>
            <Ionicons name="pin" size={18} color="#0284c7" />
            <View style={styles.logTextContainer}>
              <Text style={styles.logTitle}>{item.title}</Text>
              <Text style={styles.logCoords}>
                {item.latitude && item.longitude 
                  ? `Lat: ${item.latitude.toFixed(4)}, Lon: ${item.longitude.toFixed(4)}` 
                  : 'No GPS data attached'}
              </Text>
            </View>
          </View>
        ))}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  content: { padding: 20 },
  statCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  statNumber: { fontSize: 28, fontWeight: 'bold', color: '#0f172a', marginVertical: 6 },
  statLabel: { fontSize: 14, color: '#64748b' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#0f172a', marginTop: 10, marginBottom: 12 },
  logItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
  },
  logTextContainer: { marginLeft: 12 },
  logTitle: { fontSize: 14, fontWeight: 'bold', color: '#0f172a' },
  logCoords: { fontSize: 12, color: '#64748b', marginTop: 2 },
});