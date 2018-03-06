import { eventsDB } from '../Firebase'

export const GET_EVENTS_REQUEST = 'GET_EVENTS_REQUEST'
export const GET_EVENTS_RECEIVE = 'GET_EVENTS_RECEIVE'
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE'

export const getEventsRequest = () => ({
  type: GET_EVENTS_REQUEST
})

export const getEventsReceive = items => ({
  type: GET_EVENTS_RECEIVE,
  payload: items
})

export const getEventsFailure = error => ({
  type: GET_EVENTS_FAILURE,
  payload: error
})
