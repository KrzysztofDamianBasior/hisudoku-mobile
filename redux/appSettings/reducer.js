import { AS_THEME, AS_RESET } from './actionTypes'
import { initialState } from './initialState'

function appSettingsReducer(state = initialState, action) {
  switch (action.type) {
    case AS_THEME:
      return { ...state, theme: action.payload }
    case AS_RESET:
      return initialState
    default:
      return state
  }
}

export default appSettingsReducer
