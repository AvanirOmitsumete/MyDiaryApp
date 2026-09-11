import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import AppButton from '../components/AppButton';
import { addEntry } from '../data/diaryStore';

export default function LocationScreen() {
  const navigation = useNavigation<any>();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  
  // Automatic states
  const [currentDate, setCurrentDate] = useState('');
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [locationStatus, setLocationStatus] = useState('Fetching auto-location...');

  useEffect(() => {
    // 1. Set automatic date
    const formattedDate = new Date().toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
    setCurrentDate(formattedDate);

    // 2. Automatically request location permissions and fetch GPS
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocationStatus('Location permission denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      setLocationStatus(`GPS Locked: ${loc.coords.latitude.toFixed(4)}, ${loc.coords.longitude.toFixed(4)}`);
    })();
  }, []);

  // Open Phone Gallery
  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  // Open Phone Camera to Take Picture
  const takePhotoWithCamera = async () => {
    let cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (!cameraPermission.granted) {
      Alert.alert('Permission required', 'Camera access is needed to take pictures.');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    if (!title || !content) {
      Alert.alert('Missing Fields', 'Please manually input a title and your diary content.');
      return;
    }

    if (!imageUri) {
      Alert.alert('Missing Picture', 'Please attach or take a picture for your memory entry.');
      return;
    }

    const newDiary = {
      id: Date.now().toString(),
      title,          // Manual Input
      content,        // Manual Input
      date: currentDate, // Automatic
      imageUri,       // Captured or Picked Image
      latitude: location?.coords.latitude,   // Automatic GPS
      longitude: location?.coords.longitude, // Automatic GPS
    };

    addEntry(newDiary);

    Alert.alert('Success!', 'Your diary memory has been saved.', [
      { text: 'OK', onPress: () => {
        setTitle('');
        setContent('');
        setImageUri(null);
        navigation.jumpTo('DiaryTab'); // Correctly switches tabs to the Diary feed
      }}
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="New Memory" subtitle="Auto Date & GPS | Manual Entry" />
      <View style={styles.form}>
        
        {/* Automatic Info Badge */}
        <View style={styles.autoBadge}>
          <View style={styles.autoRow}>
            <Ionicons name="calendar" size={14} color="#0284c7" />
            <Text style={styles.autoText}>Auto Date: {currentDate}</Text>
          </View>
          <View style={styles.autoRow}>
            <Ionicons name="location" size={14} color="#0284c7" />
            <Text style={styles.autoText}>{locationStatus}</Text>
          </View>
        </View>

        {/* Manual Input: Title */}
        <Text style={styles.label}>Entry Title</Text>
        <TextInput 
          style={styles.input} 
          placeholder="e.g., Working late on project..." 
          placeholderTextColor="#94a3b8"
          value={title}
          onChangeText={setTitle}
        />

        {/* Manual Input: Diary Content */}
        <Text style={styles.label}>Diary Content</Text>
        <TextInput 
          style={[styles.input, styles.textArea]} 
          placeholder="Write about your day here..." 
          placeholderTextColor="#94a3b8"
          multiline
          value={content}
          onChangeText={setContent}
        />

        {/* Media Buttons: Camera or Gallery */}
        <Text style={styles.label}>Photo Attachment (Camera / Gallery)</Text>
        <View style={styles.mediaButtonsRow}>
          <TouchableOpacity style={styles.mediaBtn} onPress={takePhotoWithCamera}>
            <Ionicons name="camera-outline" size={18} color="#ffffff" />
            <Text style={styles.mediaBtnText}>Take Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.mediaBtn, styles.galleryBtn]} onPress={pickImageFromGallery}>
            <Ionicons name="images-outline" size={18} color="#0284c7" />
            <Text style={styles.galleryBtnText}>Pick from Gallery</Text>
          </TouchableOpacity>
        </View>

        {/* Image Preview */}
        {imageUri && (
          <View style={styles.previewContainer}>
            <Image source={{ uri: imageUri }} style={styles.previewImage} />
          </View>
        )}

        <AppButton 
          title="Save Entry to Diary" 
          onPress={handleSave} 
          iconName="checkmark-circle-outline"
          variant="primary"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  form: { padding: 20 },
  autoBadge: {
    backgroundColor: '#e0f2fe',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#bae6fd',
  },
  autoRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 2 },
  autoText: { fontSize: 13, color: '#0369a1', marginLeft: 6, fontWeight: '600' },
  label: { fontSize: 13, fontWeight: 'bold', color: '#334155', marginBottom: 6 },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    color: '#0f172a',
  },
  textArea: { height: 100, textAlignVertical: 'top' },
  mediaButtonsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  mediaBtn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0284c7',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  mediaBtnText: { color: '#ffffff', fontWeight: 'bold', marginLeft: 6, fontSize: 14 },
  galleryBtn: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#0284c7',
    marginLeft: 6,
    marginRight: 0,
  },
  galleryBtnText: { color: '#0284c7', fontWeight: 'bold', marginLeft: 6, fontSize: 14 },
  previewContainer: { marginBottom: 20, borderRadius: 8, overflow: 'hidden' },
  previewImage: { width: '100%', height: 200, borderRadius: 8 },
});