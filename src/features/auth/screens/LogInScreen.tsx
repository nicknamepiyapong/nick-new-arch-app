import React from 'react'
import { Text, View } from 'react-native'
// component
import PrimaryButton from '../components/Button'

// hook
import useLogout from '../hooks/useLogout'

// screen
export default function LogInScreen() {

  const { handleLogout } = useLogout()

  return (
    <View>
      <Text>LogIn Screen</Text>
      <PrimaryButton onPress={handleLogout} />
    </View>
  )
}
