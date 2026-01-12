# React Native (New Arch Ready)
# Feature-Driven Modular Architecture
Also known as Feature-First Architecture, Feature-Based Architecture, Modular-Feature Architecture

This project is a **React Native (CLI)** application designed with a **feature-first, scalable architecture**.
The goal is to keep the codebase **clean, enforceable, and maintainable** as the app and team grow.

---

## 🧠 Core Principles

- **Feature-Driven Modular Architecture with Enforced Boundaries**
- **Clear ownership**: each feature owns its UI, logic, and business rules
- **Shared ≠ Business**: shared layer contains infrastructure only
- **Strict boundaries** enforced by ESLint
- **System features** (e.g. Auth) are allowed cross-feature access by design
- **Ready for scale** (Redux / Saga / New Architecture)

---

## 📁 Project Structure

```txt
src/
├── app/
│   ├── App.tsx              # App bootstrap / root
│   └── index.ts
│
├── features/
│   ├── appHome/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── screens/
│   │   └── index.ts
│   │
│   ├── auth/
│   │   ├── components/      # SignIn / Auth-related UI components
│   │   ├── hooks/           # useAuth, useLogin, useLogout, etc.
│   │   ├── screens/         # SignInScreen, ForgotPasswordScreen
│   │   ├── services/        # Auth business logic (login, logout, me)
│   │   │   └── authService.ts
│   │   └── index.ts
│   │
│   └── setting/
│       ├── components/
│       │   └── SettingButton/
│       ├── hooks/
│       │   └── useLogout.ts
│       ├── screens/
│       │   └── SettingScreen.tsx
│       └── index.ts
│
├── shared/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── index.ts
│   │
│   ├── components/
│   │   └── common/
│   │       └── BaseView.tsx
│   │
│   ├── hooks/
│   │   └── useMount.ts
│   │
│   ├── services/
│   │   ├── httpClient.ts
│   │   ├── authToken.ts
│   │   ├── logger.ts
│   │   └── index.ts
│   │
│   ├── theme/
│   │   ├── colors.ts
│   │   ├── fonts.ts
│   │   ├── fontSizes.ts
│   │   ├── lineHeight.ts
│   │   ├── space.ts
│   │   ├── typography.ts
│   │   └── index.ts
│   │
│   └── utils/
│       └── isEmpty.ts
```


## ⚙️ Environment Requirements

> ❗ This project **requires Node.js >= 20**

- **Node.js:** `>= 20.x` (LTS recommended)
- **Yarn:** `3.6.4` (via Corepack)
- **React Native CLI** (no Expo)

### Why Node >= 20?

- Required by modern **Metro** internals
- Required by **@react-native/debugger-frontend**
- Compatible with **New Architecture (Fabric / TurboModules)**
- Avoids known issues in Node 18 and earlier

### Check your Node version

```bash
node -v
```

If your Node version is below 20, upgrade using nvm:

```bash
nvm install 20
nvm use 20
nvm alias default 20
```

## 📱 Prerequisites

### iOS (macOS only)

- Xcode (latest stable)
- CocoaPods  
  ```bash
  sudo gem install cocoapods
  ```

### Android

- Android Studio
- Android SDK (API 34+ recommended)
- `ANDROID_HOME` properly configured

---

## 📦 1. Install Dependencies

After cloning the repository:

```bash
git clone <repo-url>
cd <your-project-folder>
```

Enable Corepack and install dependencies:

```bash
corepack enable
yarn set version 3.6.4
corepack prepare yarn@3.6.4 --activate
yarn install
```

> **Note**: This project uses **Yarn Berry (v3)**.  
> **Do NOT** use `npm install`.

---

## 🍎 2. iOS Setup (First Time)

Install CocoaPods:

```bash
cd ios
RCT_NEW_ARCH_ENABLED=1 pod install
cd ..
```

New Architecture is enabled by default.

If you encounter build issues, try:

```bash
yarn clean-ios
yarn clean-pod
```

Run iOS App:

```bash
yarn ios
```

To list available devices/simulators:

```bash
yarn ios-devices
```

---

## 🤖 3. Android Setup (First Time)

Make sure an emulator or device is running, then:

```bash
yarn android
```

If you encounter build or C++ issues:

```bash
yarn clean-gradlew
```

---

## 🧹 Common Clean Commands

This project provides several clean scripts for common issues:

```bash
yarn clean-app       # Clean everything
yarn clean-npm       # Reinstall node_modules
yarn clean-ios       # Clean Xcode build cache
yarn clean-pod       # Reinstall CocoaPods
yarn clean-gradlew   # Clean Android build & Gradle cache
yarn clean-metro     # Reset Metro cache
```

> Use these only when needed (e.g. after dependency or native changes).

---

## ▶️ Running the App (Daily Development)

Start Metro manually (optional):

```bash
yarn start
```

Run platforms:

```bash
yarn ios
yarn android
```

---

## 🧪 Lint & Test

```bash
yarn lint
yarn test
```

---

## 🏗 Build Commands

### Android (Release)

```bash
yarn build:android
yarn build:android-apk
yarn release-android
```

> iOS release builds are handled via Xcode / CI.

---

## ⚠️ Notes & Tips

- Fonts are registered via `react-native.config.js`.
- If new fonts are added:
  ```bash
  npx react-native-asset
  ```
  
- If fonts do not appear on iOS:
  ```bash
  yarn clean-ios
  yarn ios
  ```

- Do **not** modify files under `shared/` — business logic lives there.
- Feature boundaries are enforced by ESLint.

---

## 🆘 Troubleshooting

| Issue | Command |
|-------|---------|
| Metro cache issues | `yarn clean-metro` |
| iOS build stuck / fonts not updated | `yarn clean-ios && yarn ios` |
| Android CMake / NDK issues | `yarn clean-gradlew` |
