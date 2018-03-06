import { eventsDB } from '../Firebase'

export const GET_EVENTS_REQUEST = 'GET_EVENTS_REQUEST'
export const GET_EVENTS_RECEIVE = 'GET_EVENTS_RECEIVE'
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE'

const getEventsRequest = () => ({
  type: GET_EVENTS_REQUEST
})

const getEventsReceive = items => ({
  type: GET_EVENTS_RECEIVE,
  payload: items
})

const getEventsFailure = error => ({
  type: GET_EVENTS_FAILURE,
  payload: error
})

export const getEventsActions = () => dispatch => {
  dispatch(getEventsRequest())

  eventsDB.get().then(
    (querySnapshot) => {
      const events = []

      querySnapshot.forEach((event) => {
        events.push({ id: event.id, ...event.data() })
      })

      if (events.length > 0) { dispatch(getEventsReceive(events)) }
      else { dispatch(getEventsFailure('No events retrieved.')) }
    },
    (error) => { dispatch(getEventsFailure(error)) }
  )
}
