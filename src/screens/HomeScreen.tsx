import { useState, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { DiaryEntry } from '../types';
import { getEntries } from '../data/diaryStore';

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  // Refresh list automatically when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      setEntries(getEntries());
    }, [])
  );

  return (
    <View style={styles.container}>
      <Header title="My Diary" subtitle="Personal Journal & Memories" />
      <ScrollView contentContainerStyle={styles.content}>
        {entries.map((entry) => (
          <TouchableOpacity 
            key={entry.id} 
            activeOpacity={0.9}
            style={styles.cardContainer}
            onPress={() => navigation.navigate('Detail', { entry })}
          >
            <ImageBackground 
              source={{ uri: entry.imageUri || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=500&auto=format&fit=crop' }} 
              style={styles.imageBackground}
            >
              <LinearGradient
                colors={['transparent', 'rgba(15, 23, 42, 0.85)', '#0f172a']}
                style={styles.gradient}
              >
                <View style={styles.cardHeader}>
                  <Ionicons name="calendar-outline" size={16} color="#38bdf8" />
                  <Text style={styles.date}>{entry.date}</Text>
                </View>
                <Text style={styles.title}>{entry.title}</Text>
                <Text style={styles.contentTxt} numberOfLines={2}>{entry.content}</Text>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  content: { padding: 20, paddingBottom: 100 }, // Added paddingBottom to clear the navbar
  cardContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  imageBackground: { width: '100%', height: 200, justifyContent: 'flex-end' },
  gradient: { width: '100%', height: '100%', justifyContent: 'flex-end', padding: 16 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  date: { fontSize: 12, color: '#38bdf8', marginLeft: 6, fontWeight: '600' },
  title: { fontSize: 18, fontWeight: 'bold', color: '#ffffff', marginBottom: 4 },
  contentTxt: { fontSize: 14, color: '#94a3b8', lineHeight: 18 },
});