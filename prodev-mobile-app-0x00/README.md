# Task 1: Create Your First Mobile App

## Scaffolding Steps

1. Navigated to the project directory:

   ```bash
   cd prodev-mobile-setup
   ```

2. Initialized a new Expo project using the latest Expo Router template:

   ```bash
   npx create-expo-app@latest .
   ```

## Home Screen Modification

- Edited `app/(tabs)/index.tsx`.
- Changed the default text from `Welcome!` to `First App Created`.

## Running and Testing the Application

- Started the Expo development server:

  ```bash
  npx expo start
  ```

- Scanned the QR code using Expo Go on a physical device to test the app.

## Resetting the Application

- Ran the reset command:

  ```bash
  npm run reset-project
  ```

- **Observation:** The reset command cleans up the project, removing build artifacts and restoring the initial state. This helps ensure a fresh environment for development and testing.

## Files Modified

- `app/(tabs)/index.tsx`: Updated welcome text.
- `README.md`: Documented setup and observations.
