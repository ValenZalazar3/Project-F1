import { GET_DRIVERS } from './actionTypes'

const initialState = {
  drivers: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload
      }
    default:
      return state
  }
}

export default reducer
