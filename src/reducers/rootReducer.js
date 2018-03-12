import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { reducer as formReducer } from 'redux-form'
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
  form: formReducer
})

export default rootReducer
