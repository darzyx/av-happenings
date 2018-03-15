import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_RECEIVE,
  GET_COMMENTS_FAILURE,
  CACHE_USER_COMMENT
} from '../actions/commentActions'

export const commentsReducer = (state = [ ], action) => {
  switch (action.type) {
    case GET_COMMENTS_REQUEST:
    case GET_COMMENTS_RECEIVE:
    case GET_COMMENTS_FAILURE:
    case CACHE_USER_COMMENT:
    default:
      return state
  }
}
