import { DiaryEntry } from '../types';

// Initial pre-loaded entries with default GPS coordinates
let sharedEntries: DiaryEntry[] = [
  { 
    id: '1', 
    title: 'First Day of CS41A7', 
    content: 'Started building my React Native diary app project today.', 
    date: 'Sept 11, 2026',
    imageUri: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&auto=format&fit=crop',
    latitude: 10.3157,
    longitude: 123.8854
  },
  { 
    id: '2', 
    title: 'Late Night Coding', 
    content: 'Debugging styles and making sure TypeScript types match up cleanly.', 
    date: 'Sept 10, 2026',
    imageUri: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop',
    latitude: 10.3157,
    longitude: 123.8854
  },
];

export const getEntries = () => sharedEntries;

export const addEntry = (newEntry: DiaryEntry) => {
  sharedEntries = [newEntry, ...sharedEntries];
};