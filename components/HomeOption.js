/* eslint-disable react/prop-types */
import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Ripple from 'react-native-material-ripple'

export default function HomeOption({ title, index, navigation, name }) {
  return (
    <Ripple
      style={styles.container}
      rippleColor="#D500F9"
      rippleOpacity={0.87}
      rippleDuration={1200}
      onPress={() => {
        switch (title) {
          case 'Reasume':
            navigation.navigate('Reasume')
            break
          case 'Generate':
            navigation.navigate('Generate')
            break
          case 'Create':
            navigation.navigate('Create')
            break
          case 'Scan':
            navigation.navigate('Camera')
            break
          case 'Search':
            navigation.navigate('Search')
            break
        }
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </Ripple>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'stretch',
    minHeight: 56,
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: 'rgba(0,0,0, .4)',
  },
  text: {
    fontSize: 15,
    fontWeight: '400', // fontWeight:bold
    color: 'rgba(0,0,0,.54)',
    fontFamily: 'Alegreya',
    textShadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
})
