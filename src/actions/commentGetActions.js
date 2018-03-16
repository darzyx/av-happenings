import { eventsDB } from '../Firebase'

export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST'
export const GET_COMMENTS_RECEIVE = 'GET_COMMENTS_RECEIVE'
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE'

const getCommentsRequest = () => ({
  type: GET_COMMENTS_REQUEST
})

const getCommentsReceive = comments => ({
  type: GET_COMMENTS_RECEIVE,
  comments
})

const getCommentsFailure = error => ({
  type: GET_COMMENTS_FAILURE,
  error
})

export const getComments = eid => dispatch => {
  dispatch(getCommentsRequest())

  eventsDB.doc(eid).collection('comments').orderBy('timestamp', 'desc').get()
    .then((commentsSnapshot) => {
      const comments = [ ]

      commentsSnapshot.forEach((comment) => {
        comments.push({ id: comment.id, ...comment.data() })
      })

      if (comments.length > 0) { dispatch(getCommentsReceive(comments))
      } else { dispatch(getCommentsFailure('No comments retrieved.')) }
    }, (error) => dispatch(getCommentsFailure(error))
    )
}
