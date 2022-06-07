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
import { initialState } from './initialState'

export { initialState } from './initialState'

function gameSettingsReducer(state = initialState, action) {
  switch (action.type) {
    case GS_TIMER:
      return { ...state, timer: action.payload }
    case GS_SOLVER:
      return { ...state, solver: action.payload }
    case GS_REGION_HIGHLIGHTING:
      return { ...state, region_highlighting: action.payload }
    case GS_ROW_COLUMN_HIGHLIGHTING:
      return { ...state, row_column_highlighting: action.payload }
    case GS_HIDE_DUPLICATES:
      return { ...state, hide_duplicates: action.payload }
    case GS_PREVENT_MISTAKES:
      return { ...state, prevent_mistakes: action.payload }
    case GS_AUTO_REMOVE_NOTES:
      return { ...state, auto_remove_notes: action.payload }
    case GS_RESET:
      return initialState
    default:
      return state
  }
}

export default gameSettingsReducer
