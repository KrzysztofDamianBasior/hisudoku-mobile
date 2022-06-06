/* eslint-disable react/display-name */
import * as React from 'react'

import { Text, StyleSheet, View, Animated } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MaterialIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'

import HomeStack from './HomeStack'
import PersonalStack from './PersonalStack'
import Info from '../screens/Info'
import SettingsStack from './SettingsStack'

import useBottomTabAnimation from '../hooks/useBottomTabAnimation'

const TabNavigator = createBottomTabNavigator()

const AnimatedIcon = Animated.createAnimatedComponent(MaterialIcons)

export default () => {
  const {
    bgColorAnimation,
    topMargins,
    boxSizes,
    colors,
    setFocusedTab,
    iconSizes,
  } = useBottomTabAnimation(4) //there is 4 tabs

  const pages = [
    {
      component: HomeStack,
      name: 'HomeStack',
      tabBarAccessibilityLabel: 'Home screen',
      headerShown: false,
      iconName: 'dashboard',
    },
    {
      component: PersonalStack,
      name: 'PersonalStack',
      tabBarAccessibilityLabel: 'Personal screen',
      headerShown: false,
      iconName: 'account-circle',
    },
    {
      component: SettingsStack,
      name: 'SettingsStack',
      tabBarAccessibilityLabel: 'Settings screen',
      headerShown: true,
      iconName: 'settings',
      headerTransparent: true,
      headerTitle: () => {
        return <Text>Settings</Text>
      },
    },
    {
      component: Info,
      name: 'Info',
      tabBarAccessibilityLabel: 'Informations about app',
      headerShown: true,
      iconName: 'info-outline',
      headerTransparent: true,
      headerTitle: () => {
        return <Text>App information</Text>
      },
    },
  ]

  return (
    <TabNavigator.Navigator
      id="BottomTabNavigator"
      initialRouteName="Home"
      backBehavior="firstRoute"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#afafaf',
        tabBarActiveBackgroundColor: '#111111',
        tabBarInactiveBackgroundColor: '#222222',
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarStyle: { position: 'absolute' }, //required if BlurView was used in a tabBarBackground. To show your screen under the tab bar, you can set the position style to absolute
        headerBackground: () => (
          <BlurView
            tint="dark"
            intensity={80}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      {pages.map((page, index) => (
        <TabNavigator.Screen
          key={'tab-' + index}
          name={page.name}
          component={page.component}
          options={{
            tabBarAccessibilityLabel: page.tabBarAccessibilityLabel,
            tabBarIcon: ({ color, size, focused }) => (
              <View style={styles.tabWrapper}>
                <Animated.View
                  style={[
                    styles.iconWrapper,
                    {
                      backgroundColor: bgColorAnimation(colors[index]),
                      marginTop: topMargins[index],
                      width: boxSizes[index],
                      height: boxSizes[index],
                    },
                  ]}
                >
                  <Animated.Text
                    style={{
                      padding: 10,
                      textAlign: 'center',
                    }}
                  >
                    <AnimatedIcon
                      name={page.iconName}
                      style={{ fontSize: iconSizes[index] }}
                      //size={iconSizes[index]}
                      color={color}
                    />
                  </Animated.Text>
                </Animated.View>
              </View>
            ),
            headerShown: page.headerShown,
            headerTransparent: page.headerTransparent,
            headerTitle: page.headerTitle,
          }}
          listeners={{
            tabPress: (e) => {
              setFocusedTab(index)
            },
          }}
        />
      ))}
    </TabNavigator.Navigator>
  )
}

const styles = StyleSheet.create({
  absoluteFill: {
    display: 'flex',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  tabWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
  },
  iconWrapper: {
    position: 'relative',
    width: 70,
    height: 70,
    justifyContent: 'center',
    marginTop: -10,
    borderRadius: 35,
  },
})
