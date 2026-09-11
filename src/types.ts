export interface DiaryEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  imageUri?: string;
  latitude?: number;
  longitude?: number;
}