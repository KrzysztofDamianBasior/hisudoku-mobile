import { H_ADD_TO_STACK, H_POP_FROM_STACK, H_RESET } from './actionTypes'

export const saveMove = (board, notes) => (dispatch) => {
  dispatch({
    type: H_ADD_TO_STACK,
    payload: { board, notes },
  })
}

export const resetHistory = () => (dispatch) => {
  dispatch({
    type: H_RESET,
  })
}

export const undoMove = () => (dispatch) => {
  dispatch({
    type: H_POP_FROM_STACK,
  })
}
