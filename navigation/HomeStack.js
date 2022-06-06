/* eslint-disable react/display-name */
import * as React from 'react'
import { Easing } from 'react-native'
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from '@react-navigation/stack'
import Home from '../screens/Home'
import Game from '../screens/Game'
import SudokuCreator from '../screens/SudokuCreator'
import Camera from '../screens/Camera'

const HomeStack = createStackNavigator()

// eslint-disable-next-line react/prop-types
export default () => {
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
        //gestureEnabled: true,
        //gestureDirection: 'horizontal',
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
        name="Game"
        component={Game}
        //CUSTOM HEADER
        //overwrite the behavior
        //Make sure to set headerMode to screen as well when using a custom header
        //Specify a height in headerStyle to avoid glitches
        //If your header's height differs from the default header height, then you might notice glitches due to measurement being async. Explicitly specifying the height will avoid such glitches.
        //Note that this style is not applied to the header by default since you control the styling of your custom header. If you also want to apply this style to your header, use headerStyle from the props.
        // header: ({ navigation, route, options, back }) => {
        //   const title = getHeaderTitle(options, route.name);
        //   return (
        //     <MyHeader
        //       title={title}
        //       leftButton={
        //         back ? <MyBackButton onPress={navigation.goBack} /> : undefined
        //       }
        //       style={options.headerStyle}
        //     />
        //   );
        // };
        //headerStyle: {
        //  height: 80, // Specify the height of your custom header
        //},
      />
      <HomeStack.Screen name="Camera" component={Camera} />
      <HomeStack.Screen name="SudokuCreator" component={SudokuCreator} />
    </HomeStack.Navigator>
  )
}
