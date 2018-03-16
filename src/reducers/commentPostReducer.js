import {
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE
} from '../actions/commentPostActions'

const initCommentPostState = { error: ' ', id: null, requesting: false }

export const commentPostReducer = (state = initCommentPostState, action) => {
  switch (action.type) {
    case POST_COMMENT_REQUEST:
      return {
        ...state,
        error: ' ',
        id: null,
        requesting: true
      }
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        id: action.payload,
        requesting: false
      }
    case POST_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        id: null,
        requesting: false
      }
    default:
      return state
  }
}
