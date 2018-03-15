import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_RECEIVE,
  GET_EVENTS_FAILURE
} from '../actions/eventGetActions'
import { VOID_GOTTEN_EVENTS } from '../actions/eventMiscActions'

// EVENTS REDUCERS

const initEventsState = {
  didInvalidate: false,
  error: null,
  isGetting: false,
  items: [ ]
}

export const eventsReducer = (state = initEventsState, action) => {
  switch (action.type) {
    case VOID_GOTTEN_EVENTS:
      return {
        ...state,
        didInvalidate: true,
        items: [ ]
      }
    case GET_EVENTS_REQUEST:
      return {
        ...state,
        didInvalidate: false,
        error: null,
        isGetting: true
      }
    case GET_EVENTS_RECEIVE:
      return {
        ...state,
        didInvalidate: false,
        isGetting: false,
        items: action.events
      }
    case GET_EVENTS_FAILURE:
      return {
        ...state,
        didInvalidate: false,
        error: action.error,
        isGetting: false
      }
    default:
      return state
  }
}
