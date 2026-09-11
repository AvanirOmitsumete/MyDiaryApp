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

## Third-Party Packages Used
- **Navigation:** `@react-navigation/native`, `@react-navigation/bottom-tabs`, `@react-navigation/native-stack` (for hybrid tab and stack navigation flows).
- **Vector Icons:** `@expo/vector-icons` (for cross-platform UI iconography).
- **Maps:** `react-native-maps` (for rendering interactive map markers of journal entries).
- **Location Tracking:** `expo-location` (for retrieving live device GPS coordinates automatically).
- **Image Picking:** `expo-image-picker` (for accessing the native camera and phone photo library).
- **Linear Gradients:** `expo-linear-gradient` (for rendering smooth color transitions on UI cards and headers).

---

## Installation

Run this single command in your terminal to install all required packages at once:

```bash
npx expo install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack @expo/vector-icons react-native-maps expo-location expo-image-picker expo-linear-gradient

## How to Run the Project

1. **Navigate to the Project Directory**  
   Open your command line interface and switch to the root folder of the application:
   ```bash
   cd MyDiaryApp

Install Local Dependencies

Ensure all node modules are properly synchronized:

Bash
npm install
Initialize the Development Environment

Start the local Expo Metro bundler:

Bash
npx expo start
Execute on a Target Device or Emulator

Download and open the Expo Go application on your physical iOS or Android device.

Scan the terminal-rendered QR code to compile and launch the project instance.