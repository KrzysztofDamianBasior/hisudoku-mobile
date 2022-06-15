/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import SudokuKeyboard from '../components/SudokuKeyboard'
import Sudoku from '../components/Sudoku'

import { isBoardValid } from '../utils/sudokuProcessing/isBoardValid'
import recursiveSudokuSolver from '../utils/sudokuProcessing/recursiveSudokuSolver'

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

export default function Game({
  initialArray = emptyBoard,
  displayedBoard = emptyBoard,
  displayedNotes = emptyNotes,
  historyStore,
}) {
  const [displayedArray, setDisplayedArray] = useState(displayedBoard)
  const [notes, setNotes] = useState(displayedNotes)
  const [pressedCell, setPressedCell] = useState([null, null])
  const [noteMode, setNoteMode] = useState(false)
  const [invalidCells, setInvalidCells] = useState([])

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
            newBoard[pressedCell[0]][pressedCell[1]] = key
            return newBoard
          })
        }
        break
      case 'notes':
        setNoteMode(!noteMode)
        break
      case 'undo':
        if (historyStore.historyLength() > 1) {
          historyStore.undo()
          let [prevBoard, prevMoves] = historyStore.lastMove()
          setDisplayedArray(prevBoard)
        }
        break
      default:
        if (noteMode) {
          setNotes((prevNotes) => {
            let newNotes = prevNotes
            newNotes[pressedCell[0]][pressedCell[1]] = [
              ...newNotes[pressedCell[0]][pressedCell[1]],
              key,
            ]
            setNotes(newNotes)
          })
        } else {
          setDisplayedArray((prevArray) => {
            let newBoard = prevArray
            newBoard[pressedCell[0]][pressedCell[1]] = key
            setDisplayedArray(newBoard)
          })
        }
        break
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.sudoku}>
        <Sudoku
          initialArray={initialArray}
          displayedArray={displayedArray}
          pressedCell={pressedCell}
          setPressedCell={setPressedCell}
          notes={notes}
          invalidCells={invalidCells}
          options={null}
        />
      </View>
      <View style={styles.keyboard}>
        <SudokuKeyboard onKeyPressed={onKeyPressed} />
      </View>
      <View style={styles.button}>
        <TouchableOpacity>
          <Text>Hint</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setInvalidCells(isBoardValid(displayedBoard))
          }}
        >
          <Text>Validate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setDisplayedArray(recursiveSudokuSolver(displayedBoard))
          }}
        >
          <Text>Solve</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  sudoku: {
    flex: 3,
  },
  keyboard: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
