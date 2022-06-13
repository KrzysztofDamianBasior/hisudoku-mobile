import { H_ADD_TO_STACK, H_POP_FROM_STACK, H_RESET } from './actionTypes'
import { initialState } from './initialState'

export const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case H_ADD_TO_STACK:
      return { ...state, moves: [...state.moves, action.payload] }
    case H_POP_FROM_STACK:
      return { ...state, moves: state.moves.slice(0, -1) }
    case H_RESET:
      return { ...state, moves: [] }
    default:
      return state
  }
}
