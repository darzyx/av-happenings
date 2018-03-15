import {eventsDB, timestamp} from '../Firebase'

// ACTION TYPES

export const SELECT_EVENTS_SORT = 'SELECT_EVENTS_SORT'

export const VOID_GOTTEN_EVENTS = 'VOID_GOTTEN_EVENTS'

export const GET_EVENTS_REQUEST = 'GET_EVENTS_REQUEST'
export const GET_EVENTS_RECEIVE = 'GET_EVENTS_RECEIVE'
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE'

export const POST_EVENT_REQUEST = 'POST_EVENT_REQUEST'
export const POST_EVENT_SUCCESS = 'POST_EVENT_SUCCESS'
export const POST_EVENT_FAILURE = 'POST_EVENT_FAILURE'

export const DELETE_EVENT_REQUEST = 'DELETE_EVENT_REQUEST'
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS'
export const DELETE_EVENT_FAILURE = 'DELETE_EVENT_FAILURE'

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

const sortedEventsDB = (eventsSort, user) => {
  switch (eventsSort) {
    case 'top':
      return eventsDB.orderBy('likeCount', 'desc')
    case 'new':
      return eventsDB.orderBy('timestamp', 'desc')
    case 'featured':
      return eventsDB.where('featured', '==', true)
    case 'mine':
      return eventsDB.where('uid', '==', user.uid)
    default:
      return eventsDB
  }
}

const getEvents = (eventsSort, user) => dispatch => {
  dispatch(getEventsRequest(eventsSort))

  sortedEventsDB(eventsSort, user).get().then(
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

export const getEventsIfNeed = (eventsSort, user) => (dispatch, getState) => {
  if (eventsAreCached(getState(), eventsSort)) {
    dispatch(getEvents(eventsSort, user))
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

const postEvent = (event, user) => dispatch => {
  event.featured = false
  event.timestamp = timestamp
  event.uid = user.uid
  event.username = user.username
  event.likeCount = 1
  event.commentCount = 0

  eventsDB.add(event).then(
    (eventSnapshot) => {
      const eventLikesDB = eventsDB.doc(eventSnapshot.id).collection('likes')

      eventLikesDB.doc(user.uid).set({ uid: user.uid })
        .then(() => dispatch(postEventSuccess(eventSnapshot.id)))
    },
    (error) => { dispatch(postEventFailure(error)) }
  )
}

const eventFieldErrors = event => {
  const {title, date, time, location, description} = event

  if (!!(title && date && time && location && description) === false) {
    return 'All fields are required before submitting.'
  } else {
    return 'none'
  }
}

export const postEventIfValid = (event, user) => dispatch => {
  dispatch(postEventRequest())

  if (eventFieldErrors(event) === 'none') { dispatch(postEvent(event, user)) }
  else { dispatch(postEventFailure(eventFieldErrors(event))) }
}

// DELETE EVENT ACTION CREATORS

const deleteEventRequest = id => ({
  type: DELETE_EVENT_REQUEST,
  id
})

const deleteEventSuccess = id => ({
  type: DELETE_EVENT_SUCCESS,
  id
})

const deleteEventFailure = (id, error) => ({
  type: DELETE_EVENT_FAILURE,
  id,
  error
})

export const deleteEvent = id => dispatch => {
  dispatch(deleteEventRequest(id))

  eventsDB.doc(id).delete().then(
    () => { dispatch(deleteEventSuccess(id)) },
    (error) => { dispatch(deleteEventFailure(id, error)) }
  )
}
