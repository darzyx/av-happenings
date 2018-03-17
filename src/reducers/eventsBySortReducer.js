import { eventsReducer } from './eventsReducer'
import { VOID_GOTTEN_EVENTS } from '../actions/eventMiscActions'
import { UPDATE_EVENT_LIKE_COUNT } from '../actions/likeActions'
import { POST_COMMENT_SUCCESS } from '../actions/commentPostActions'
import { DELETE_COMMENT_SUCCESS } from '../actions/commentDeleteActions'
import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_RECEIVE,
  GET_EVENTS_FAILURE
} from '../actions/eventGetActions'
import {
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE
} from '../actions/eventDeleteActions'

export const eventsBySortReducer = (state = { }, action) => {
  let newState

  switch (action.type) {
    case VOID_GOTTEN_EVENTS:
    case GET_EVENTS_REQUEST:
    case GET_EVENTS_RECEIVE:
    case GET_EVENTS_FAILURE:
      return {
        ...state,
        [action.eventsSort]: eventsReducer(state[action.eventsSort], action)
      }
    case UPDATE_EVENT_LIKE_COUNT:
      newState = JSON.parse(JSON.stringify(state))

      for (let key in newState) {
        newState[key].items.forEach((item) => {
          if (item.id === action.eid) {item.likeCount += action.changeVal}
        })
      }

      return newState
    case POST_COMMENT_SUCCESS:  // update event comment count
      newState = JSON.parse(JSON.stringify(state))

      for (let key in newState) {
        newState[key].items.forEach((item) => {
          if (item.id === action.eid) {item.commentCount += action.changeVal}
        })
      }

      return newState
    case DELETE_COMMENT_SUCCESS:  // update event comment count
      newState = JSON.parse(JSON.stringify(state))

      for (let key in newState) {
        newState[key].items.forEach((item) => {
          if (item.id === action.eid) {item.commentCount += action.changeVal}
        })
      }

      return newState
    case DELETE_EVENT_SUCCESS:
      newState = JSON.parse(JSON.stringify(state))

      for (let key in newState) {
        newState[key].items = newState[key].items.filter((item) => {
          return item.id !== action.id
        })
      }

      return newState
    case DELETE_EVENT_REQUEST:
    case DELETE_EVENT_FAILURE:
    default:
      return state
  }
}
