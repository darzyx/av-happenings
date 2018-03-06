import { eventsDB, timestamp } from '../Firebase'

export const POST_EVENT_REQUEST = 'POST_EVENT_REQUEST'
export const POST_EVENT_SUCCESS = 'POST_EVENT_SUCCESS'
export const POST_EVENT_FAILURE = 'POST_EVENT_FAILURE'

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
