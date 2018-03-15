import {combineReducers} from 'redux'
import {userReducer} from './userReducer'
import {reducer as formReducer} from 'redux-form'
import {commentsReducer} from './commentReducers'
import {
  activeEventsSortReducer,
  eventsBySortReducer,
  postEventReducer
} from './eventsReducers'

const rootReducer = combineReducers({
  user: userReducer,
  activeEventsSort: activeEventsSortReducer,
  eventsBySort: eventsBySortReducer,
  postEvent: postEventReducer,
  comments: commentsReducer,
  form: formReducer
})

export default rootReducer
