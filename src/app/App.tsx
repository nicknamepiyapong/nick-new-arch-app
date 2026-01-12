/**
 * App Entry Point
 */

import React from 'react'
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'

import { HomeScreen } from '@/features/appHome'

function App() {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  )
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <HomeScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
