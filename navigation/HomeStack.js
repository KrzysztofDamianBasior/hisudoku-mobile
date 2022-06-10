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
import Game from '../screens/Game'
import SudokuCreator from '../screens/SudokuCreator'
import Camera from '../screens/Camera'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
const HomeStack = createStackNavigator()

export default ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = ['Game', 'Camera', 'SudokuCreator']

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
      <HomeStack.Screen name="Game" component={Game} />
      <HomeStack.Screen name="Camera" component={Camera} />
      <HomeStack.Screen name="SudokuCreator" component={SudokuCreator} />
    </HomeStack.Navigator>
  )
}

////////////////////////////////////////////////////////////////////////

// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
// const ProfileStack = createStackNavigator();

// const ProfileNavigator = ({ navigation, route }) => {
//         React.useLayoutEffect(() => {
//             const routeName = getFocusedRouteNameFromRoute(route);
//             if (routeName === "Group"){
//                 navigation.setOptions({tabBarVisible: false});
//             }else {
//                 navigation.setOptions({tabBarVisible: true});
//             }
//         }, [navigation, route]);
//         return(
//             <ProfileStack.Navigator>
//                 <ProfileStack.Screen name="Profile" component={ProfileScreen} />
//                 <ProfileStack.Screen name="Group" component={GroupScreen} />
//             </ProfileStack.Navigator>
//         )};

// const tabHiddenRoutes = ["Group","Map"];

// if(tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))){
//   navigation.setOptions({tabBarVisible: false});
//   }else{
//   navigation.setOptions({tabBarVisible: true});
// }
// [Edit] - In case of v6, use display because tabBarVisible is deprecated in the favour of tabBarStyle-

// if(tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))){
//   navigation.setOptions({tabBarStyle: {display: 'none'}});
//   } else {
//   navigation.setOptions({tabBarStyle: {display: 'flex'}});
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
