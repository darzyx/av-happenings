import {
  SELECT_EVENTS_SORT,
  GET_EVENTS_REQUEST,
  GET_EVENTS_RECEIVE,
  GET_EVENTS_FAILURE,
  POST_EVENT_REQUEST,
  POST_EVENT_SUCCESS,
  POST_EVENT_FAILURE
} from '../actions/eventsActions'

// SORT EVENTS REDUCER

export const sortEventsReducer = (state = { sort: 'top' }, action) => {
  switch (action.type) {
    case SELECT_EVENTS_SORT:
      return {
        ...state,
        sort: action.payload
      }
    default:
      return state
  }
}

// GET EVENTS REDUCER

const initGetEventsState = {
  error: null,
  events: null,
  hasRequested: false
}

export const getEventsReducer = (state = initGetEventsState, action) => {
  switch (action.type) {
    case GET_EVENTS_REQUEST:
      return {
        ...state,
        error: null,
        events: null,
        hasRequested: false
      }
    case GET_EVENTS_RECEIVE:
      return {
        ...state,
        error: null,
        events: action.payload,
        hasRequested: true
      }
    case GET_EVENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        events: null,
        hasRequested: true
      }
    default:
      return state
  }
}

// POST EVENT REDUCER

const initPostEventState = {
  error: null,
  id: null,
  requesting: false
}

export const postEventReducer = (state = initPostEventState, action) => {
  switch (action.type) {
    case POST_EVENT_REQUEST:
      return {
        ...state,
        error: null,
        id: null,
        requesting: true
      }
    case POST_EVENT_SUCCESS:
      return {
        ...state,
        error: null,
        id: action.payload,
        requesting: false
      }
    case POST_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        id: null,
        requesting: false
      }
    default:
      return state
  }
}
