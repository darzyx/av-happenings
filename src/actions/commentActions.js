import {eventsDB, usersDB} from '../Firebase'

export const UPDATE_COMMENT_COUNT = 'UPDATE_COMMENT_COUNT'
export const CACHE_USER_COMMENT = 'CACHE_USER_COMMENT'

const updateCommentCount = (eid, changeVal) => ({
  type: UPDATE_COMMENT_COUNT,
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
      dispatch(updateCommentCount(eid, 1))
    })
}
