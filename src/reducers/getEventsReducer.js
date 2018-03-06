import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_RECEIVE,
  GET_EVENTS_FAILURE
} from '../actions/getEventsActions'

const initGetEventsState = {
  error: null,
  hasRequested: false,
  events: null
}

const getEventsReducer = (state = initGetEventsState, action) => {
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

export default getEventsReducer
