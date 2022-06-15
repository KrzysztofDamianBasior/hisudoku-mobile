/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import SudokuKeyboard from '../components/SudokuKeyboard'
import Sudoku from '../components/Sudoku'

import { useDispatch } from 'react-redux'
import { saveMove, resetHistory } from '../redux/history'

const emptyNotes = [
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
]

const emptyBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

export default ({
  initialArray = emptyBoard,
  displayedBoard = emptyBoard,
  displayedNotes = emptyNotes,
  navigation,
}) => {
  const [displayedArray, setDisplayedArray] = useState(displayedBoard)
  const [notes, setNotes] = useState(displayedNotes)
  const [pressedCell, setPressedCell] = useState([null, null])
  const [noteMode, setNoteMode] = useState(false)
  const dispatch = useDispatch()

  const onKeyPressed = (key) => {
    switch (key) {
      case 'erase':
        if (noteMode) {
          setNotes((prevNotes) => {
            let newNotes = prevNotes
            newNotes[pressedCell[0]][pressedCell[1]] = []
            return newNotes
          })
        } else {
          setDisplayedArray((prevArray) => {
            let newBoard = prevArray
            newBoard[pressedCell[0]][pressedCell[1]] = 0
            return newBoard
          })
        }
        break
      case 'notes':
        setNoteMode(!noteMode)
        break
      default:
        if (noteMode) {
          setNotes((prevNotes) => {
            let newNotes = prevNotes
            newNotes[pressedCell[0]][pressedCell[1]] = [
              ...newNotes[pressedCell[0]][pressedCell[1]],
              key,
            ]
            return newNotes
          })
        } else {
          setDisplayedArray((prevArray) => {
            let newBoard = prevArray
            newBoard[pressedCell[0]][pressedCell[1]] = key
            return newBoard
          })
        }
        break
    }
  }

  return (
    <View style={styles.container}>
      <Sudoku
        initialArray={initialArray}
        displayedArray={displayedArray}
        pressedCell={pressedCell}
        setPressedCell={setPressedCell}
        notes={notes}
        options={null}
      />
      <SudokuKeyboard onKeyPressed={onKeyPressed} />
      <View>
        <TouchableOpacity
          onPress={() => {
            dispatch(resetHistory())
            dispatch(saveMove(displayedArray, []))
            navigation.navigate('Reasume')
          }}
        >
          <Text>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  sudoku: {},
  keyboard: {},
  button: {},
})
