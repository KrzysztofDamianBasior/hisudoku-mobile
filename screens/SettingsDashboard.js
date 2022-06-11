/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react'
import { StyleSheet, Text, View, SectionList, StatusBar } from 'react-native'
import SettingsOption from '../components/SettingsOption'
import { SafeAreaView } from 'react-native-safe-area-context'

export default ({ navigation, route }) => {
  const options = [
    {
      title: 'App Settings',
      data: [
        { title: 'Set theme', buttonMode: 'options' },
        { title: 'Reset', buttonMode: 'options' },
      ],
    },
    {
      title: 'Game Settings',
      data: [
        { title: 'Hide timer', buttonMode: 'toggle' },
        { title: 'Set solver', buttonMode: 'options' },
        { title: 'Region highlighting', buttonMode: 'toggle' },
        { title: 'Row-column highlighting', buttonMode: 'toggle' },
        { title: 'Hide duplicates', buttonMode: 'toggle' },
        { title: 'Prevent mistakes', buttonMode: 'toggle' },
        { title: 'Auto remove notes', buttonMode: 'toggle' },
        { title: 'Reset', buttonMode: 'toggle' },
      ],
    },
  ]
  return (
    <SafeAreaView styles={styles.container}>
      <SectionList
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 100 }}
        sections={options}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <SettingsOption title={item.title} buttonMode={item.buttonMode} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    backgroundColor: '#eafffe',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    fontSize: 16,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    padding: 10,
    elevation: 4,
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
  },
})
