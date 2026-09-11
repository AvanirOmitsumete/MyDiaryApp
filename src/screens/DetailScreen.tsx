import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { DiaryEntry } from '../types';

export default function DetailScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const entry: DiaryEntry = route.params?.entry;

  if (!entry) {
    return (
      <View style={styles.container}>
        <Header title="Memory Detail" subtitle="View Entry" />
        <View style={styles.center}>
          <Text style={styles.errorText}>Entry not found.</Text>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Header title="Memory Detail" subtitle="Full Story" />
      <View style={styles.contentContainer}>
        {!!entry.imageUri && (
          <Image source={{ uri: entry.imageUri }} style={styles.image} />
        )}

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="calendar-outline" size={16} color="#0284c7" />
            <Text style={styles.metaText}>{entry.date}</Text>
          </View>
          {entry.latitude !== undefined && entry.longitude !== undefined && (
            <View style={styles.metaItem}>
              <Ionicons name="location-outline" size={16} color="#0284c7" />
              <Text style={styles.metaText}>
                {entry.latitude.toFixed(4)}, {entry.longitude.toFixed(4)}
              </Text>
            </View>
          )}
        </View>

        <Text style={styles.title}>{entry.title}</Text>
        <Text style={styles.body}>{entry.content}</Text>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={18} color="#ffffff" />
          <Text style={styles.backButtonText}>Back to Feed</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
  errorText: { fontSize: 16, color: '#64748b', marginBottom: 12 },
  contentContainer: { padding: 20 },
  image: { width: '100%', height: 240, borderRadius: 12, marginBottom: 16 },
  metaRow: { flexDirection: 'row', marginBottom: 12, flexWrap: 'wrap' },
  metaItem: { flexDirection: 'row', alignItems: 'center', marginRight: 16, marginBottom: 4 },
  metaText: { fontSize: 13, color: '#0369a1', marginLeft: 4, fontWeight: '600' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#0f172a', marginBottom: 12 },
  body: { fontSize: 16, color: '#334155', lineHeight: 24, marginBottom: 30 },
  backBtn: { backgroundColor: '#0284c7', padding: 12, borderRadius: 8 },
  backBtnText: { color: '#ffffff', fontWeight: 'bold' },
  backButton: { 
    flexDirection: 'row', 
    backgroundColor: '#0f172a', 
    padding: 14, 
    borderRadius: 8, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 40 
  },
  backButtonText: { color: '#ffffff', fontSize: 15, fontWeight: 'bold', marginLeft: 8 },
});