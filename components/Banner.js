/* eslint-disable react/display-name */
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'
import logo from '../assets/icon.png'

export default () => {
  return (
    <Animatable.View style={styles.container}>
      <Image
        accessible={true}
        accessibilityLabel="app banner"
        animation="slideInDown"
        easing="ease-out"
        iterationCount="infinite"
        direction="alternate"
        blurRadius={8}
        style={styles.logo}
        source={logo}
      />
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
})
