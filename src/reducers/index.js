import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_RECEIVE,
  GET_EVENTS_FAILURE
} from '../actions/index'

const initialState = {
  error: null,
  hasRequested: false,
  events: null
}

const getPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_REQUEST:
      return {
        ...state,
        error: null,
        hasRequested: false,
        events: null
      }
    case GET_EVENTS_RECEIVE:
      return {
        ...state,
        error: null,
        hasRequested: true,
        events: action.payload
      }
    case GET_EVENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        hasRequested: true,
        events: null
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  getPosts: getPostsReducer,
  form: formReducer
})

export default rootReducer
