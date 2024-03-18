import { GET_DRIVERS } from './actionTypes'
import axios from 'axios'
const baseUrl = 'http://localhost:3001/drivers'

export const getDrivers = () => {
  return async (dispatch) => {
    const response = await axios.get(baseUrl)

    dispatch({
      type: GET_DRIVERS,
      payload: response.data
    })
  }
}
