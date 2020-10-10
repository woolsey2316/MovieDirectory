import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger()
// Calls createStore() to create the centralized redux state store.
export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)
