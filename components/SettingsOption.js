/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

export default ({ title, buttonMode }) => {
  //dropdown picker
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ])

  //switch
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      {buttonMode === 'toggle' && (
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      )}
      {buttonMode === 'options' && (
        <DropDownPicker
          listMode="MODAL"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select an item"
          containerStyle={{
            height: 70,
          }}
          dropDownStyle={{
            marginTop: 11,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            fontSize: 20,
            fontWeight: 'bold',
          }}
          dropDownMaxHeight={200}
          itemStyle={{
            justifyContent: 'flex-start',
            marginTop: 10,
            borderBottomWidth: 0.5,
            fontSize: 50,
          }}
          style={{
            borderBottomColor: '#4C84FF',
            borderBottomWidth: 1,
            zIndex: 5000,
            backgroundColor: '#eeeeee',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomStartRadius: 3,
            borderBottomEndRadius: 3,
            borderColor: '#eeeeee',
          }}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
