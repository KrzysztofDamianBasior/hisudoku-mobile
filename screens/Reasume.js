/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { StyleSheet, Text, Pressable, View } from 'react-native'
import Game from './Game'

import { useSelector, useDispatch } from 'react-redux'
import { saveMove, resetHistory, undoMove } from '../redux/history'

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

export default ({ navigation }) => {
  const dispatch = useDispatch()
  let savedMoves = useSelector((state) => state.moves) // [[sudoku],[notes]]
  let [lastBoard, lastNotes] = savedMoves.slice(-1)[0]
  let [initialBoard, _] = savedMoves[0]

  const addMoveToStore = (board, notes) => {
    dispatch(saveMove(board, notes))
  }

  const clearHistory = () => dispatch(resetHistory())

  const undo = () => dispatch(undoMove())

  const lastMove = () => {
    return savedMoves.slice(-1)[0]
  }

  const historyLength = () => savedMoves.length

  const historyStore = {
    addMoveToStore,
    clearHistory,
    undo,
    lastMove,
    historyLength,
  }

  return (
    <Game
      initialArray={initialBoard}
      displayedArray={lastBoard}
      displayedNotes={lastNotes}
      historyStore={historyStore}
    />
  )
}
