/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import * as React from 'react'
import { Easing } from 'react-native'
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from '@react-navigation/stack'
import Home from '../screens/Home'
import Generate from '../screens/Generate'
import Reasume from '../screens/Reasume'
import Camera from '../screens/Camera'
import SudokuCreator from '../screens/SudokuCreator'
import Search from '../screens/Search'

import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
const HomeStack = createStackNavigator()

export default ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = [
      'Reasume',
      'Generate',
      'Create',
      'Camera',
      'Search',
    ]

    const routeName = getFocusedRouteNameFromRoute(route)
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } })
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex' } })
    }
  }, [navigation, route])

  const config = {
    animation: 'timing',
    config: {
      duration: 1000,
      easing: Easing.linear,
    },
  }

  return (
    <HomeStack.Navigator
      id="HomeStack"
      initialRouteName="Home"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        transitionSpec: {
          open: config,
          close: config,
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerBackAccessibilityLabel: 'Home',
        }}
      />
      <HomeStack.Screen
        name="Reasume"
        component={Reasume}
        options={{
          headerShown: false,
          headerBackAccessibilityLabel: 'Reasume',
        }}
      />
      <HomeStack.Screen
        name="Generate"
        component={Generate}
        options={{
          headerShown: false,
          headerBackAccessibilityLabel: 'Generate sudoku',
        }}
      />
      <HomeStack.Screen
        name="Create"
        component={SudokuCreator}
        options={{
          headerShown: false,
          headerBackAccessibilityLabel: 'Create sudoku',
        }}
      />
      <HomeStack.Screen
        name="Scan"
        component={Camera}
        options={{
          headerShown: false,
          headerBackAccessibilityLabel: 'Scan sudoku',
        }}
      />
      {/* <HomeStack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: true,
          headerBackAccessibilityLabel: 'Find sudoku',
        }}
      /> */}
    </HomeStack.Navigator>
  )
}
