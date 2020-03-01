import * as types from '../constants/actionTypes'

const initialState = {
  randomPhoto: {},
  sorry: ''
}

export default function todos(state = initialState, action) {
  
  switch (action.type) {

    
    case `${types.GET_RANDOM_PHOTO}_FULFILLED`:
      
      if (action.payload.location !== undefined) {
        return {
          ...state,
          randomPhoto: {
            loaciton: { ...action.payload.location },
            urls: { ...action.payload.urls }
          }
        }
      } else {
        return {
          ...state,
          sorry: { ...action.payload }
        }
      }
      

      
    default:
      return state
  }
}
