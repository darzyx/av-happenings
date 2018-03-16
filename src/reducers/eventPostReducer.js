import {
  POST_EVENT_REQUEST,
  POST_EVENT_SUCCESS,
  POST_EVENT_FAILURE
} from '../actions/eventPostActions'

const initEventPostState = { error: ' ', id: null, requesting: false }

export const eventPostReducer = (state = initEventPostState, action) => {
  switch (action.type) {
    case POST_EVENT_REQUEST:
      return {
        ...state,
        error: ' ',
        id: null,
        requesting: true
      }
    case POST_EVENT_SUCCESS:
      return {
        ...state,
        id: action.payload,
        requesting: false
      }
    case POST_EVENT_FAILURE:
      return {
        ...state,
        error: action.error,
        id: null,
        requesting: false
      }
    default:
      return state
  }
}
