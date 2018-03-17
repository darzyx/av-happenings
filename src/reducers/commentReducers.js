import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_RECEIVE,
  GET_COMMENTS_FAILURE
} from '../actions/commentGetActions'
import { POST_COMMENT_SUCCESS } from '../actions/commentPostActions'
import { DELETE_COMMENT_SUCCESS } from '../actions/commentDeleteActions'

const initCommentsState = { error: null, isGetting: false, items: [ ] }

export const commentsReducer = (state = initCommentsState, action) => {
  switch (action.type) {
    case GET_COMMENTS_REQUEST:
      return {
        ...state,
        error: null,
        isGetting: true,
        items: [ ]
      }
    case GET_COMMENTS_RECEIVE:
      return {
        ...state,
        isGetting: false,
        items: action.comments
      }
    case GET_COMMENTS_FAILURE:
      return {
        ...state,
        isGetting: false,
        error: action.error
      }
    case POST_COMMENT_SUCCESS:  // add the newly posted comment to state
      return {
        ...state,
        items: state.items.slice().reverse().concat([action.comment]).reverse()
      }
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        items: state.items.filter((comment) => comment.id !== action.cid )
      }
    default:
      return state
  }
}
