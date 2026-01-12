/**
 * App Entry Point
 */

import React from 'react'
import { StatusBar, StyleSheet, useColorScheme, Text, View } from 'react-native'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'

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
      <View>
        <Text>Home Screen</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
