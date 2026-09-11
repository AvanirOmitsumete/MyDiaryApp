# MyDiaryApp — CS Major Elective 3 Practical Examination

**Student Name:** Kent Jay D. Otadoy  
**Section / Course:** CS41A (CS Major Elective 3)  
**Institution:** ACLC College of Mandaue  

---

## Overview
MyDiaryApp is a mobile diary and memory-logging application built with React Native and Expo. It allows users to capture daily journal entries enhanced with automatic timestamps, live GPS coordinates, interactive map viewing, and photo attachments from the device's camera or gallery.

---

## Screens List
1. **Diary Feed (`HomeScreen` & `DetailScreen`):** Displays a scrollable feed of all saved personal memories using a nested stack navigation model, allowing users to tap an entry to view its full content and location details.
2. **New Memory (`LocationScreen`):** A form-based screen featuring automatic date and GPS coordinate tracking, manual text inputs for titles and content, photo picker integrations, and custom action buttons.
3. **Insights (`StatsScreen`):** Displays summary statistics, entry counts, and geolocation analytics based on recorded logs.

---

## Custom Reusable Components
- `Header.tsx`: A consistent, styled top header component utilized across screens to display titles and contextual subtitles.
- `AppButton.tsx`: A reusable button component featuring dynamic variants, touch feedback, custom icons, and typography.

---

## Third-Party Packages Used & Installation

The application integrates multiple libraries for navigation, icons, maps, location, images, and visual gradients. You can install all required packages at once using the following command:

```bash
npx expo install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack @expo/vector-icons react-native-maps expo-location expo-image-picker expo-linear-gradient

Navigation: @react-navigation/native, @react-navigation/bottom-tabs, @react-navigation/native-stack (for hybrid tab and stack navigation flows).

Vector Icons: @expo/vector-icons (for cross-platform UI iconography).

Maps: react-native-maps (for rendering interactive map markers of journal entries).

Location Tracking: expo-location (for retrieving live device GPS coordinates automatically).

Image Picking: expo-image-picker (for accessing the native camera and phone photo library).

Linear Gradients: expo-linear-gradient (for rendering smooth color transitions on UI cards and headers).

How to Run the Project
Clone or open the project folder in your terminal:

Bash
cd MyDiaryApp
Install dependencies:

Bash
npm install
Start the Expo development server:

Bash
npx expo start
Run on a device or emulator:

Install the Expo Go app on your physical iOS or Android device.

Scan the generated QR code from your terminal or Metro bundler screen to launch the app.