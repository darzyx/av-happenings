import { eventsDB } from '../Firebase'

export const GET_EVENTS_REQUEST = 'GET_EVENTS_REQUEST'
export const GET_EVENTS_RECEIVE = 'GET_EVENTS_RECEIVE'
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE'

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
    case 'hot':
      return eventsDB.orderBy('commentCount', 'desc')
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

  sortedEventsDB(eventsSort, user).get()
    .then((eventsSnapshot) => {
      const events = [ ]

      eventsSnapshot.forEach((event) => {
        events.push({ id: event.id, ...event.data() })
      })

      if (events.length) { dispatch(getEventsReceive(eventsSort, events)) }
      else { dispatch(getEventsFailure(eventsSort, 'No events retrieved.')) }
      }, (error) => dispatch(getEventsFailure(eventsSort, error))
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
