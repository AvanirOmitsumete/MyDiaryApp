# MyDiaryApp — Practical Examination Project

**Student Name:** Kent Jay D. Otadoy  
**Section / Course:** CS41A7 (CS Major Elective 3)  
**Institution:** ACLC College of Mandaue  

---

## Overview
MyDiaryApp is a mobile journal application built with React Native and Expo. It provides users with a comprehensive memory-logging interface featuring automated timestamps, live GPS geolocation tracking, interactive map displays, and native camera and gallery image integration.

---

## Screen Directory
1. **Diary Feed (`HomeScreen` & `DetailScreen`):** Implements a hybrid stack and tab navigation architecture to present an itemized feed of historical entries, expanding into granular detail views upon selection.
2. **New Memory (`LocationScreen`):** A data entry module featuring real-time GPS coordinate synchronization, date stamping, form inputs, and multimedia attachment tools.
3. **Insights (`StatsScreen`):** Analytical dashboard tracking journal entry metrics and geolocation logging statistics.

---

## Reusable Component Architecture
- `Header.tsx`: Unified navigation header providing structural title hierarchy and layout consistency.
- `AppButton.tsx`: Modular button component incorporating dynamic styling variants, press feedback, and integrated iconography.

---

## Third-Party Dependencies
- **Navigation:** `@react-navigation/native`, `@react-navigation/bottom-tabs`, `@react-navigation/native-stack`
- **Iconography:** `@expo/vector-icons`
- **Mapping:** `react-native-maps`
- **Geolocation:** `expo-location`
- **Media Handling:** `expo-image-picker`
- **Visual Effects:** `expo-linear-gradient`

---

## Installation & Package Setup

Execute the following command in your terminal to install all required project dependencies:

```bash
npx expo install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack @expo/vector-icons react-native-maps expo-location expo-image-picker expo-linear-gradient
```
---

## How to Run the Project

1. **Navigate to the Project Directory**  
   Open your command line interface and switch to the root folder of the application:
   ```bash
   cd MyDiaryApp
    ```
2. **Install Local Dependencies**  
    Ensure all node modules are properly synchronized:
    ```Bash
    npm install
    ```
3. **Initialize the Development Environment**  
    Start the local Expo Metro bundler:
    ```Bash
    npx expo start
    ```
4. **Execute on a Target Device or Emulator**  
   Download and open the Expo Go application on your physical iOS or Android device.  
   Scan the terminal-rendered QR code to compile and launch the project instance.  
    