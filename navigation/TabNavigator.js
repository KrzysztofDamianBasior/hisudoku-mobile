/* eslint-disable react/display-name */
import * as React from 'react'

import { Text, StyleSheet, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'

import HomeStack from './HomeStack'
import PersonalStack from './PersonalStack'
import Info from '../screens/Info'
import SettingsStack from './SettingsStack'

const TabNavigator = createBottomTabNavigator()

export default () => {
  return (
    <TabNavigator.Navigator
      initialRouteName="Home"
      backBehavior="firstRoute"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#afafaf',
        tabBarActiveBackgroundColor: '#111111',
        tabBarInactiveBackgroundColor: '#222222',
        tabBarIconStyle: {},
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarStyle: { position: 'absolute' }, //required if BlurView was used in a tabBarBackground. To show your screen under the tab bar, you can set the position style to absolute
        tabBarLabelPosition: 'beside-icon', //"below-icon"
        headerBackground: () => (
          <BlurView
            tint="dark"
            intensity={80}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <TabNavigator.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {},
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" size={size} color={color} />
          ),
          tabBarAccessibilityLabel: 'Home screen',
          headerShown: false,
        }}
      />
      <TabNavigator.Screen
        name="Personal"
        component={PersonalStack}
        options={{
          tabBarLabel: 'Personal',
          tabBarLabelStyle: {},
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          tabBarAccessibilityLabel: 'Personal tab',
          headerShown: false,
        }}
      />
      <TabNavigator.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: 'Settings',
          tabBarLabelStyle: {},
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
          tabBarAccessibilityLabel: 'Settings screen',
          headerShown: false,
        }}
      />
      <TabNavigator.Screen
        name="Info"
        component={Info}
        options={{
          tabBarLabel: 'Info',
          tabBarLabelStyle: {},
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="info-outline" size={size} color={color} />
          ),
          tabBarAccessibilityLabel: 'Settings screen',
          headerTransparent: true,
          headerTitle: () => {
            return <Text>App information</Text>
          },
        }}
      />
    </TabNavigator.Navigator>
  )
}

const styles = StyleSheet.create({
  absoluteFill: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
})
