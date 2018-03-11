import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { logInStatusReducer } from './userReducers'
import {
  activeEventsSortReducer,
  eventsBySortReducer,
  postEventReducer
} from './eventsReducers'

const rootReducer = combineReducers({
  activeEventsSort: activeEventsSortReducer,
  eventsBySort: eventsBySortReducer,
  logInStatus: logInStatusReducer,
  postEvent: postEventReducer,
  form: formReducer
})

export default rootReducer
