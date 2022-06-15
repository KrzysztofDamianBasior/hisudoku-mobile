/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

// value={displayedArray[rindex][cindex]}
// number={initialArray}
// disabled={initialArray[rindex][cindex] !== 0}
// notes={notes[rindex][cindex]}
// pressed={
//   pressedCell[0] == rindex && pressedCell[1] == cindex
// }

export default ({ value, initialValue, disabled, notes, pressed }) => {
  return (
    <View styles={styles.container}>
      {/* <View style={styles.row}>
        <Text style={styles.note}>{notes[0]}</Text>
        <Text style={styles.note}>{notes[1]}</Text>
        <Text style={styles.note}>{notes[2]}</Text>
      </View> */}
      <View style={styles.row}>
        {/* <Text style={styles.note}>{notes[3]}</Text> */}
        <View style={styles.number}>
          <Text>
            {initialValue == '0' ? (value == '0' ? '' : value) : initialValue}
          </Text>
        </View>
        {/* <Text style={styles.note}>{notes[4]}</Text> */}
      </View>
      {/* <View style={styles.row}>
        <Text style={styles.note}>{notes[5]}</Text>
        <Text style={styles.note}>{notes[6]}</Text>
        <Text style={styles.note}>{notes[7]}</Text>
        <Text style={styles.note}>{notes[8]}</Text>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  note: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    margin: 1,
    height: 10,
    width: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  solvedCell: {},
  unsolvedCell: {},
  filledCell: {},
})
