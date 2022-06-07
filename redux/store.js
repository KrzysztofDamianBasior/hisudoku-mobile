import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { appSettingsReducer } from './appSettings'
import { gameSettingsReducer } from './gameSettings'

const rootReducer = combineReducers({ appSettingsReducer, gameSettingsReducer })

export const store = createStore(rootReducer, applyMiddleware(thunk))
