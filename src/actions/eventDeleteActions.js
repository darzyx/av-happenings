import { eventsDB, usersDB } from '../Firebase'

export const DELETE_EVENT_REQUEST = 'DELETE_EVENT_REQUEST'
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS'
export const DELETE_EVENT_FAILURE = 'DELETE_EVENT_FAILURE'

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

  eventsDB.doc(id).get()
    .then((eventSnapshot) => {
      const eventUserID = eventSnapshot.data().uid

      eventsDB.doc(id).delete()
        .then(() => dispatch(deleteEventSuccess(id)),
        (error) => dispatch(deleteEventFailure(id, error))
        )

      usersDB.doc(eventUserID).get()
        .then((userSnapshot) => {
          const userDB = usersDB.doc(eventUserID)
          const newEventCount = userSnapshot.data().eventCount - 1
          const newLikeCount = userSnapshot.data().likeCount - 1

          userDB.update({ eventCount: newEventCount, likeCount: newLikeCount })
        })
    })
}
