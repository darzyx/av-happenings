import { eventsDB, timestamp } from '../Firebase'

export const SELECT_EVENTS_SORT = 'SELECT_EVENTS_SORT'
export const GET_EVENTS_REQUEST = 'GET_EVENTS_REQUEST'
export const GET_EVENTS_RECEIVE = 'GET_EVENTS_RECEIVE'
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE'
export const POST_EVENT_REQUEST = 'POST_EVENT_REQUEST'
export const POST_EVENT_SUCCESS = 'POST_EVENT_SUCCESS'
export const POST_EVENT_FAILURE = 'POST_EVENT_FAILURE'

// SELECT EVENTS SORT ACTION CREATOR

export const selectEventsSort = sort => ({
  type: SELECT_EVENTS_SORT,
  payload: sort
})

// GET EVENTS ACTION CREATORS

const getEventsRequest = sort => ({
  type: GET_EVENTS_REQUEST,
  sort
})

const getEventsReceive = (items, sort) => ({
  type: GET_EVENTS_RECEIVE,
  payload: items,
  sort
})

const getEventsFailure = (error, sort) => ({
  type: GET_EVENTS_FAILURE,
  payload: error,
  sort
})

const sortedEventsDB = sort => {
  switch (sort) {
    case 'new':
      return eventsDB.orderBy('timestamp', 'desc')
    default:
      return eventsDB
  }
}

const getEventsActions = sort => dispatch => {
  dispatch(getEventsRequest(sort))

  sortedEventsDB(sort).get().then(
    (querySnapshot) => {
      const events = []

      querySnapshot.forEach((event) => {
        events.push({ id: event.id, ...event.data() })
      })

      if (events.length > 0) { dispatch(getEventsReceive(events, sort)) }
      else { dispatch(getEventsFailure('No events retrieved.')) }
    },
    (error) => { dispatch(getEventsFailure(error, sort)) }
  )
}

export const getEventsIfNeeded = sort => (dispatch, getState) => {

  // TODO: Implement condition (posts already fetched vs not yet fetched)

  return dispatch(getEventsActions(sort))
}

// POST EVENTS ACTION CREATORS

const postEventRequest = () => ({
  type: POST_EVENT_REQUEST
})

const postEventSuccess = id => ({
  type: POST_EVENT_SUCCESS,
  payload: id
})

const postEventFailure = error => ({
  type: POST_EVENT_FAILURE,
  payload: error
})

export const postEventActions = event => dispatch => {
  dispatch(postEventRequest())

  event.timestamp = timestamp

  eventsDB.add(event).then(
    (docRef) => { dispatch(postEventSuccess(docRef.id)) },
    (error) => { dispatch(postEventFailure(error)) }
  )
}
