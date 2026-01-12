import React from 'react'
import { Text, View } from 'react-native'
// component
import SettingButton from '../components/SettingButton'

// hook
import useLogout from '../hooks/useLogout'

// screen
export default function SettingScreen() {

  const { handleLogout } = useLogout()

  return (
    <View>
      <Text>Setting Screen</Text>
      <SettingButton onPress={handleLogout} />
    </View>
  )
}
