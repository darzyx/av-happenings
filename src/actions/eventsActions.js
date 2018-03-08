import { eventsDB, timestamp } from '../Firebase'

// ACTION TYPES

export const SELECT_EVENTS_SORT = 'SELECT_EVENTS_SORT'

export const VOID_GOTTEN_EVENTS = 'VOID_GOTTEN_EVENTS'

export const GET_EVENTS_REQUEST = 'GET_EVENTS_REQUEST'
export const GET_EVENTS_RECEIVE = 'GET_EVENTS_RECEIVE'
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE'

export const POST_EVENT_REQUEST = 'POST_EVENT_REQUEST'
export const POST_EVENT_SUCCESS = 'POST_EVENT_SUCCESS'
export const POST_EVENT_FAILURE = 'POST_EVENT_FAILURE'

// SELECT EVENTS SORT ACTION CREATOR

export const selectEventsSort = eventsSort => ({
  type: SELECT_EVENTS_SORT,
  eventsSort
})

// VOID GOTTEN EVENTS ACTION CREATOR

export const voidGottenEvents = eventsSort => ({
  type: VOID_GOTTEN_EVENTS,
  eventsSort
})

// GET EVENTS ACTION CREATORS

const getEventsRequest = eventsSort => ({
  type: GET_EVENTS_REQUEST,
  eventsSort
})

const getEventsReceive = (eventsSort, events) => ({
  type: GET_EVENTS_RECEIVE,
  eventsSort,
  events
})

const getEventsFailure = (eventsSort, error) => ({
  type: GET_EVENTS_FAILURE,
  eventsSort,
  error
})

const sortedEventsDB = eventsSort => {
  switch (eventsSort) {
    case 'new':
      return eventsDB.orderBy('timestamp', 'desc')
    default:
      return eventsDB
  }
}

const getEvents = eventsSort => dispatch => {
  dispatch(getEventsRequest(eventsSort))

  sortedEventsDB(eventsSort).get().then(
    (querySnapshot) => {
      const events = []

      querySnapshot.forEach((event) => {
        events.push({ id: event.id, ...event.data() })
      })

      if (events.length > 0) { dispatch(getEventsReceive(eventsSort, events)) }
      else { dispatch(getEventsFailure(eventsSort, 'No events retrieved.')) }
    },
    (error) => { dispatch(getEventsFailure(eventsSort, error)) }
  )
}

const eventsAreCached = (state, eventsSort) => {
  const events = state.eventsBySort[eventsSort]

  if (!events) { return true }
  else if (events.isGetting) { return false }
  else { return events.didInvalidate }
}

export const getEventsIfNeed = eventsSort => (dispatch, getState) => {
  if (eventsAreCached(getState(), eventsSort)) {
    return dispatch(getEvents(eventsSort))
  }
}

// POST EVENT ACTION CREATORS

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
