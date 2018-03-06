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

export const getEvents = () => dispatch => {
  dispatch(getEventsRequest())

  eventsDB.get().then(
    (querySnapshot) => {
      const events = []

      querySnapshot.forEach((event) => {
        events.push({ id: event.id, ...event.data() })
      })

      dispatch(getEventsReceive(events))
    },
    (error) => { dispatch(getEventsFailure(error)) }
  )
}
