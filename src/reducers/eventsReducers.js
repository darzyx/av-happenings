import {
  SELECT_EVENTS_SORT,
  VOID_GOTTEN_EVENTS,
  GET_EVENTS_REQUEST,
  GET_EVENTS_RECEIVE,
  GET_EVENTS_FAILURE,
  POST_EVENT_REQUEST,
  POST_EVENT_SUCCESS,
  POST_EVENT_FAILURE,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE
} from '../actions/eventsActions'

// ACTIVE EVENTS SORT

export const activeEventsSortReducer = (state = 'new', action) => {
  switch (action.type) {
    case SELECT_EVENTS_SORT:
      return action.eventsSort
    default:
      return state
  }
}

// EVENTS REDUCERS

const initEventsState = {
  didInvalidate: false,
  error: null,
  isGetting: false,
  items: [ ]
}

const eventsReducer = (state = initEventsState, action) => {
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

export const eventsBySortReducer = (state = {}, action) => {
  switch (action.type) {
    case VOID_GOTTEN_EVENTS:
    case GET_EVENTS_REQUEST:
    case GET_EVENTS_RECEIVE:
    case GET_EVENTS_FAILURE:
      return {
        ...state,
        [action.eventsSort]: eventsReducer(state[action.eventsSort], action)
      }
    case DELETE_EVENT_SUCCESS:
      let newState = {...state}

      for (let key in newState) {
        newState[key].items = newState[key].items.filter((item) => {
          return item.id !== action.id
        })
      }

      return newState
    case DELETE_EVENT_REQUEST:
    case DELETE_EVENT_FAILURE:
    default:
      return state
  }
}

// POST EVENT REDUCER

const initPostEventState = {error: ' ', id: null, requesting: false}

export const postEventReducer = (state = initPostEventState, action) => {
  switch (action.type) {
    case POST_EVENT_REQUEST:
      return {
        ...state,
        error: ' ',
        id: null,
        requesting: true
      }
    case POST_EVENT_SUCCESS:
      return {
        ...state,
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
