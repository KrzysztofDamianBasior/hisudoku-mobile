/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import SudokuCell from './SudokuCell'

export default ({
  initialArray,
  displayedArray,
  pressedCell,
  setPressedCell,
  notes,
  invalidCells = [],
  options,
}) => {
  return (
    <View style={styles.container}>
      {['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9'].map(
        (row, rindex) => {
          return (
            <View
              key={row}
              style={
                //(rindex + 1) % 3 === 0 ? styles.bottomBorder : styles.bottom
                styles.bottomBorder
              }
            >
              {['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9'].map(
                (col, cindex) => {
                  return (
                    <TouchableOpacity
                      key={col}
                      style={
                        //(cindex + 1) % 3 === 0 ? styles.columnBorder : {}
                        styles.columnBorder
                      }
                      onPress={() => setPressedCell([rindex, cindex])}
                    >
                      <SudokuCell
                        value={displayedArray[rindex][cindex]}
                        initialValue={initialArray[rindex][cindex]}
                        disabled={initialArray[rindex][cindex] !== 0}
                        notes={notes[rindex][cindex]}
                        pressed={
                          pressedCell[0] == rindex && pressedCell[1] == cindex
                        }
                      />
                    </TouchableOpacity>
                  )
                }
              )}
            </View>
          )
        }
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
    borderColor: 'black',
    borderWidth: 2,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    //height: 10,
  },
  bottomBorder: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    //height: 10,
  },
  bottom: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    //height: 10,
  },
  columnBorder: {
    borderRightWidth: 2,
    borderRightColor: 'black',
    flex: 1,
    alignSelf: 'stretch',
  },
})
