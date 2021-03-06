import * as types from '../constants/actionTypes'
import Api from '../services/api'


export const getNews = () => (dispatch) => dispatch({
  type: types.GET_NEWS,
  payload: Api.getNews()
})


export const getRandomPhoto = () => (dispatch) => dispatch({
  type: types.GET_RANDOM_PHOTO,
  payload: Api.getRandomPhoto()
})


export const getWeather = (latitude, longitude) => (dispatch) => dispatch({
  type: types.GET_WEATHER,
  payload: Api.getWeather(latitude, longitude)
})