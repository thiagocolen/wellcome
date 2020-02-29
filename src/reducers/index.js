import { combineReducers } from 'redux'
import weatherReducer from '../reducers/weatherReducer'
import newsReducer from '../reducers/newsReducer'
import bgImageReducer from '../reducers/bgImageReducer'

const rootReducer = combineReducers({
  weatherReducer,
  newsReducer,
  bgImageReducer
})

export default rootReducer