import React from 'react'
import 'react-native-gesture-handler' //required by stack navigation
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './navigation/TabNavigator'
import { useFonts } from 'expo-font'
import { View, Text } from 'react-native'

let customFonts = {
  Alegreya: require('./assets/fonts/Alegreya-VariableFont_wght.ttf'),
  'Alegreya-Italic': require('./assets/fonts/Alegreya-Italic-VariableFont_wght.ttf'),
}

export default function App() {
  let [fontsLoaded] = useFonts(customFonts)

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <TabNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}
