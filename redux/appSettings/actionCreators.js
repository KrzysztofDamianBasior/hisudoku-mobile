import { AS_THEME, AS_RESET } from './actionTypes'

export const setAppTheme = (theme) => (dispatch) => {
  dispatch({
    type: AS_THEME,
    payload: theme,
  })
}

export const resetAppSettings = () => (dispatch) => {
  dispatch({
    type: AS_RESET,
  })
}
