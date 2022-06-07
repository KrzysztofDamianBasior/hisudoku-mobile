import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { appSettingsReducer } from './appSettings'
import { gameSettingsReducer } from './gameSettings'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  appSettingsReducer: persistReducer(persistConfig, appSettingsReducer),
  gameSettingsReducer: persistReducer(persistConfig, gameSettingsReducer),
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)
