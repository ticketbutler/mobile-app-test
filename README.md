# Welcome to the Expo App Test

## Test Objective

You have a simple Expo app that integrates a custom Kotlin Expo module to fetch the device's battery level. The codebase has some bugs and potential issues.

**Task**: Pull the provided codebase and run the app using the "Get started" instructions. Prioritise and implement fixes for up to 2 bugs or potential issues in both 1) the Expo app and 2) the Android native module. For each improvement, concisely describe the following in dot-point form:

* Why you prioritized it.
* What could go wrong if left unfixed.
* Why you implemented the fix in the way you did.
* How you'd prevent similar issues in the future.

**Deliverables:**
* Updated code files with Git commit history (delivered via Github or ZIP file).
* A doc or text file including your rationale for the changes

## Get started

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

...with a local expo module added on using the [Expo Modules API](https://docs.expo.dev/modules/third-party-library/).

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app (Android device or simulator required)

   ```bash
   expo run android
   ```

After the first run you could get an error. In this case, create a file `local.properties` in the `android` folder (the one that was created after you started the app `/android`) and add the path to the Android SDK

   ```bash
   sdk.dir=/Users/<username>/Library/Android/sdk
   ```

