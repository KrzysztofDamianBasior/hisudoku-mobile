/* eslint-disable react/prop-types */
import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Home({ navigation }) {
  //navigation.navigate('some screen')
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Game')}>
        <Text>Game</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
        <Text>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SudokuCreator')}>
        <Text>SudokuCreator</Text>
      </TouchableOpacity>
    </View>
  )
}
