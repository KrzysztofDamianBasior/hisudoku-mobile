import React from 'react'
import 'react-native-gesture-handler' //required by stack navigation
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './navigation/TabNavigator'
import { useFonts } from 'expo-font'
import { View, Text, Linking, Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// import environment configuration
import getEnvVars from './config'
const { PERSISTENCE_KEY } = getEnvVars()

// define custom fonts
let customFonts = {
  Alegreya: require('./assets/fonts/Alegreya-VariableFont_wght.ttf'),
  'Alegreya-Italic': require('./assets/fonts/Alegreya-Italic-VariableFont_wght.ttf'),
}

export default function App() {
  let [fontsLoaded] = useFonts(customFonts)
  const [isReady, setIsReady] = React.useState(false)
  const [initialState, setInitialState] = React.useState()

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL()

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY)
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined

          if (state !== undefined) {
            setInitialState(state)
          }
        }
      } finally {
        setIsReady(true)
      }
    }

    if (!isReady) {
      restoreState()
    }
  }, [isReady])

  if (!fontsLoaded || !isReady) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }
    >
      <TabNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}
