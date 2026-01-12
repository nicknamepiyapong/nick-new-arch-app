import React from 'react'
import { View, Button } from 'react-native'

export default function PrimaryButton(props: { onPress: () => void }) {
  const { onPress } = props
  return (
    <View >
      <Button title="Logout" onPress={onPress} />
    </View>
  )
}
