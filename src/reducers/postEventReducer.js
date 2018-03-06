import {
  POST_EVENT_REQUEST,
  POST_EVENT_SUCCESS,
  POST_EVENT_FAILURE
} from '../actions/postEventActions'

const initPostEventState = {
  error: null,
  id: null,
  requesting: false
}

const postEventReducer = (state = initPostEventState, action) => {
  switch (action.type) {
    case POST_EVENT_REQUEST:
      return {
        ...state,
        error: null,
        id: null,
        requesting: true
      }
    case POST_EVENT_SUCCESS:
      return {
        ...state,
        error: null,
        id: action.payload,
        requesting: false
      }
    case POST_EVENT_FAILURE:
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

export default postEventReducer;
