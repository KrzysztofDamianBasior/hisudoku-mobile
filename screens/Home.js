/* eslint-disable react/prop-types */
import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import HomeOption from '../components/HomeOption'

export default function Home({ navigation }) {
  const options = [
    { title: 'Game', name: 'Game' },
    { title: 'Camera', name: 'Camera' },
    { title: 'Sudoku Creator', name: 'SudokuCreator' },
  ]

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {options.map((option, index) => (
        <HomeOption
          key={option.title}
          title={option.title}
          index={index}
          name={option.name}
          navigation={navigation}
        />
      ))}
    </View>
  )
}
