import { eventsDB, timestamp } from '../Firebase'

export const POST_COMMENT_REQUEST = 'POST_COMMENT_REQUEST'
export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS'
export const POST_COMMENT_FAILURE = 'POST_COMMENT_FAILURE'

// ADD COMMENT ACTION CREATORS

const postCommentRequest = () => ({
  type: POST_COMMENT_REQUEST
})

const postCommentSuccess = (eid, comment, changeVal) => ({
  type: POST_COMMENT_SUCCESS,
  eid,
  comment,
  changeVal
})

const postCommentFailure = () => ({
  type: POST_COMMENT_FAILURE
})

const postComment = (comment, eid, user) => dispatch => {
  const eventDB = eventsDB.doc(eid)
  const eventCommentsDB = eventDB.collection('comments')
  const userComment = {
    ...comment,
    uid: user.uid,
    username: user.username,
    timestamp: timestamp
  }

  eventCommentsDB.add(userComment)
    .then(() => {
      eventDB.get()
        .then((eventSnapshot) => {
          const newCommentCount = eventSnapshot.data().commentCount + 1
          eventDB.update({ commentCount: newCommentCount })
        })
    })
    .then(() => dispatch(postCommentSuccess(eid, userComment, 1)),
    (error) => dispatch(postCommentFailure(error))
    )
}

const commentFieldErrors = comment => {
  const { description } = comment

  if (!!(description) === false) {
    return 'Oops! You can\'t submit an empty comment.'
  } else { return 'none' }
}

export const postCommentIfValid = (comment, eid, user) => dispatch => {
  dispatch(postCommentRequest())

  if (commentFieldErrors(comment) === 'none') {
    dispatch(postComment(comment, eid, user))
  } else { dispatch(postCommentFailure(commentFieldErrors(comment))) }
}
