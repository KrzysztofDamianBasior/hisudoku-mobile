import React from 'react'
import 'react-native-gesture-handler' //required by stack navigation
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './navigation/TabNavigator'
import { useFonts } from 'expo-font'
import { View, Linking, Platform, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './redux/store'

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
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          padding: 10,
        }}
      >
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    )
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer
          //This prop allows us to pass an initial state to use for navigation state. We can pass the restored state in this prop.
          initialState={initialState}
          // This prop notifies us of any state changes. We can persist the state in this callback
          onStateChange={(state) =>
            AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
          }
        >
          <TabNavigator />
          <StatusBar style="auto" />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}
