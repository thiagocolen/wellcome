import { combineReducers } from 'redux'
import homeReducer from '../reducers/homeReducer'
import weatherReducer from '../reducers/weatherReducer'
import newsReducer from '../reducers/newsReducer'

const rootReducer = combineReducers({
  homeReducer,
  weatherReducer,
  newsReducer
})

export default rootReducer