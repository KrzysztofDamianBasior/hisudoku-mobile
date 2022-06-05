/*
  inspired by medium article: https://hello-85764.medium.com/animating-the-bottom-tab-navigator-in-react-native-in-2021-cb3d5dbd39ce
*/

import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'

export default function useBottomTabAnimation(tabNumber) {
  const [focusedTab, setFocusedTab] = useState(1)
  const mappable = [...Array(tabNumber).keys()]

  const colors = mappable.map((item, index) => {
    return useState(
      index === focusedTab ? new Animated.Value(1) : new Animated.Value(0)
    )[0]
  })

  const iconSizes = mappable.map((item, index) => {
    return useState(
      index === focusedTab ? new Animated.Value(30) : new Animated.Value(10)
    )[0]
  })

  const boxSizes = mappable.map((item, index) => {
    return useState(
      index === focusedTab ? new Animated.Value(70) : new Animated.Value(50)
    )[0]
  })

  const topMargins = mappable.map((item, index) => {
    return useState(
      index === focusedTab ? new Animated.Value(-45) : new Animated.Value(-10)
    )[0]
  })

  useEffect(() => {
    colors.forEach((c, index) => {
      let value = focusedTab === index ? 1 : 0
      Animated.timing(c, {
        toValue: value,
        duration: 200,
        useNativeDriver: false,
      }).start()
    })
    iconSizes.forEach((s, index) => {
      let value = focusedTab === index ? 30 : 10
      console.log(index)
      Animated.timing(s, {
        toValue: value,
        duration: 200,
        useNativeDriver: false,
      }).start()
    })
    boxSizes.forEach((s, index) => {
      let value = focusedTab === index ? 70 : 50
      Animated.timing(s, {
        toValue: value,
        duration: 200,
        useNativeDriver: false,
      }).start()
    })
    topMargins.forEach((s, index) => {
      let value = focusedTab === index ? -45 : -10
      Animated.timing(s, {
        toValue: value,
        duration: 200,
        useNativeDriver: false,
      }).start()
    })
  }, [focusedTab])

  const bgColorAnimation = (c) =>
    c.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(74,74,74)', 'rgb(82,224,84)'],
    })

  console.log(iconSizes)
  console.log(focusedTab)

  return {
    bgColorAnimation,
    iconSizes,
    topMargins,
    boxSizes,
    colors,
    setFocusedTab,
  }
}
