import React, { useState, useEffect, useCallback } from 'react'
import 'react-native-gesture-handler' //required by stack navigation
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './navigation/TabNavigator'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { View } from 'react-native'

let customFonts = {
  Alegreya: require('./assets/fonts/Alegreya-VariableFont_wght.ttf'),
  'Alegreya-Italic': require('./assets/fonts/Alegreya-Italic-VariableFont_wght.ttf'),
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync()
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(customFonts)
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }
    prepare()
  }, [])
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <TabNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}
