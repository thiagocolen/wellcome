import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from '../reducers'


const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    promiseMiddleware(),
    thunkMiddleware,
    loggerMiddleware 
  )
)

export default store