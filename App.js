import * as React from 'react'
import 'react-native-gesture-handler' //required by stack navigation
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './navigation/TabNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}
