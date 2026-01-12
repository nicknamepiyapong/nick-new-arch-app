import React from 'react'
import { View, ViewProps } from 'react-native'

export default function BaseView(props: ViewProps) {
  return <View {...props} />
}
