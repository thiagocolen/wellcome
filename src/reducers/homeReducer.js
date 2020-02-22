import * as types from '../constants/actionTypes'

const initialState = {
    randomPhoto: {},
    weather: {}
  }

export default function todos(state = initialState, action) {
  switch (action.type) {

    
    case `${types.GET_RANDOM_PHOTO}_FULFILLED`:
      return {
        ...state,
        randomPhoto: {
          loaciton: { ...action.payload.location },
          urls: { ...action.payload.urls }
        }
      }


    case `${types.GET_WEATHER}_FULFILLED`:
      return {
        ...state,
        weather: action.payload
      }

      
    default:
      return state
  }
}