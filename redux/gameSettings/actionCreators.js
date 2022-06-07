import {
  GS_TIMER,
  GS_SOLVER,
  GS_REGION_HIGHLIGHTING,
  GS_ROW_COLUMN_HIGHLIGHTING,
  GS_HIDE_DUPLICATES,
  GS_PREVENT_MISTAKES,
  GS_AUTO_REMOVE_NOTES,
  GS_RESET,
} from './actionTypes'

export const toggleTimer = (isOn) => (dispatch) => {
  dispatch({
    type: GS_TIMER,
    payload: isOn,
  })
}

export const setSolver = (solver) => (dispatch) => {
  dispatch({
    type: GS_SOLVER,
    payload: solver,
  })
}

export const toggleRegionHighlighting = (isOn) => (dispatch) => {
  dispatch({
    type: GS_REGION_HIGHLIGHTING,
    payload: isOn,
  })
}

export const toggleRowColumnHighlighting = (isOn) => (dispatch) => {
  dispatch({
    type: GS_ROW_COLUMN_HIGHLIGHTING,
    payload: isOn,
  })
}

export const toggleHideDuplicates = (isOn) => (dispatch) => {
  dispatch({
    type: GS_HIDE_DUPLICATES,
    payload: isOn,
  })
}

export const togglePreventMistakes = (isOn) => (dispatch) => {
  dispatch({
    type: GS_PREVENT_MISTAKES,
    payload: isOn,
  })
}

export const toggleAutoRemoveNotes = (isOn) => (dispatch) => {
  dispatch({
    type: GS_AUTO_REMOVE_NOTES,
    payload: isOn,
  })
}

export const resetGameSettings = () => (dispatch) => {
  dispatch({
    type: GS_RESET,
  })
}
