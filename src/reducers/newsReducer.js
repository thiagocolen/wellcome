import * as types from '../constants/actionTypes'

const initialState = {
    news: {}
}

export default function todos(state = initialState, action) {
 
    switch (action.type) {
  
        case `${types.GET_NEWS}_FULFILLED`:
            return {
                ...state,
                news: action.payload
            }
      
            
        default:
            return state
    }

}
