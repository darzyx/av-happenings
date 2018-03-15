import { eventsDB, usersDB, timestamp } from '../Firebase'

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

const postEvent = (event, user) => dispatch => {
  event.featured = false
  event.timestamp = timestamp
  event.uid = user.uid
  event.username = user.username
  event.likeCount = 1
  event.commentCount = 0

  eventsDB.add(event)
    .then((eventSnapshot) => {
      const eventLikesDB = eventsDB.doc(eventSnapshot.id).collection('likes')

      eventLikesDB.doc(user.uid).set({ uid: user.uid })
        .then(() => {
          usersDB.doc(user.uid).get()
            .then((userSnapshot) => {
              usersDB.doc(user.uid).update({
                eventCount: userSnapshot.data().eventCount + 1,
                likeCount: userSnapshot.data().likeCount + 1
              })
            })
        })
        .then(() => dispatch(postEventSuccess(eventSnapshot.id)))
      }, (error) => dispatch(postEventFailure(error))
    )
}

const eventFieldErrors = event => {
  const { title, date, time, location, description } = event

  if (!!(title && date && time && location && description) === false) {
    return 'All fields are required before submitting.'
  } else { return 'none' }
}

export const postEventIfValid = (event, user) => dispatch => {
  dispatch(postEventRequest())

  if (eventFieldErrors(event) === 'none') { dispatch(postEvent(event, user)) }
  else { dispatch(postEventFailure(eventFieldErrors(event))) }
}
