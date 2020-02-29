import * as types from '../constants/actionTypes'

const initialState = {
  randomPhoto: {},
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

      
    default:
      return state
  }
}