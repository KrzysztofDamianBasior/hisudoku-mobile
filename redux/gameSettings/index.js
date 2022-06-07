//reexport functionalities
export {
  GS_TIMER,
  GS_SOLVER,
  GS_REGION_HIGHLIGHTING,
  GS_ROW_COLUMN_HIGHLIGHTING,
  GS_HIDE_DUPLICATES,
  GS_PREVENT_MISTAKES,
  GS_AUTO_REMOVE_NOTES,
  GS_RESET,
} from './actionTypes'
export { gameSettingsReducer } from './reducer'

export {
  toggleTimer,
  setSolver,
  toggleRegionHighlighting,
  toggleRowColumnHighlighting,
  toggleHideDuplicates,
  togglePreventMistakes,
  toggleAutoRemoveNotes,
  resetGameSettings,
} from './actionCreators'
