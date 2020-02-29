import * as types from '../constants/actionTypes'

const initialState = {
    weather: {}
}

export default function todos(state = initialState, action) {
 
    switch (action.type) {
  
        case `${types.GET_WEATHER}_FULFILLED`:
            return {
                ...state,
                weather: action.payload
            }
      
            
        default:
            return state
    }

}
