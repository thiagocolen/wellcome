import { combineReducers } from 'redux'
import homeReducer from '../reducers/homeReducer'
import weatherReducer from '../reducers/weatherReducer'

const rootReducer = combineReducers({
  homeReducer,
  weatherReducer
})

export default rootReducer