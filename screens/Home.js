/* eslint-disable react/prop-types */
import * as React from 'react'
import { View } from 'react-native'
import HomeOption from '../components/HomeOption'
import Banner from '../components/Banner'

export default function Home({ navigation }) {
  const options = [
    { title: 'Reasume' },
    { title: 'Generate' },
    { title: 'Create' },
    { title: 'Scan' },
    { title: 'Search' },
  ]

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Banner />
      {options.map((option, index) => (
        <HomeOption
          key={option.title}
          title={option.title}
          index={index}
          navigation={navigation}
        />
      ))}
    </View>
  )
}
