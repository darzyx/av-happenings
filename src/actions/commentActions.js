import {eventsDB} from '../Firebase'

export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST'
export const GET_COMMENTS_RECEIVE = 'GET_COMMENTS_RECEIVE'
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE'
export const UPDATE_EVENT_COMMENT_COUNT = 'UPDATE_EVENT_COMMENT_COUNT'
export const CACHE_USER_COMMENT = 'CACHE_USER_COMMENT'

// GET COMMENTS ACTION CREATORS

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

  eventsDB.doc(eid).collection('comments').get()
    .then((commentsSnapshot) => {
      const comments = []

      commentsSnapshot.forEach((comment) => {
        comments.push({ id: comment.id, ...comment.data() })
      })

      if (comments.length > 0) {
        dispatch(getCommentsReceive(comments))
      } else {
        dispatch(getCommentsFailure('No comments retrieved.'))
      }
    },
    (error) => { dispatch(getCommentsFailure(error)) }
    )
}

// ADD COMMENT ACTION CREATORS

const updateEventCommentCount = (eid, changeVal) => ({
  type: UPDATE_EVENT_COMMENT_COUNT,
  eid,
  changeVal
})

const cacheUserComment = (eid, userComment) => ({
  type: CACHE_USER_COMMENT,
  eid,
  userComment
})

export const commentEvent = (comment, eid, user) => dispatch => {
  const eventCommentsDB = eventsDB.doc(eid).collection('comments')
  const userComment = {
    ...comment,
    uid: user.id,
    username: user.username
  }

  eventCommentsDB.add(userComment)
    .then(() => {
      dispatch(cacheUserComment(userComment))
      dispatch(updateEventCommentCount(eid, 1))
    })
}
