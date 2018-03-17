import { eventsDB } from '../Firebase'

export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST'
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS'
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE'

const deleteCommentRequest = () => ({
  type: DELETE_COMMENT_REQUEST
})

const deleteCommentSuccess = (eid, cid, changeVal) => ({
  type: DELETE_COMMENT_SUCCESS,
  eid,
  cid,
  changeVal
})

const deleteCommentFailure = error => ({
  type: DELETE_COMMENT_FAILURE,
  error
})

export const deleteComment = (eid, cid) => dispatch => {
  const eventDB = eventsDB.doc(eid)

  dispatch(deleteCommentRequest())

  eventDB.collection('comments').doc(cid).delete()
    .then(() => {
      eventDB.get()
        .then((eventSnapshot) => {
          const newCommentCount = eventSnapshot.data().commentCount - 1

          eventDB.update({ commentCount: newCommentCount })
        })
    })
    .then(() => dispatch(deleteCommentSuccess(eid, cid, -1)),
    (error) => dispatch(deleteCommentFailure())
    )
}
