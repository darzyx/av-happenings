import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {
  activeEventsSortReducer,
  eventsBySortReducer,
  postEventReducer
} from './eventsReducers'

const rootReducer = combineReducers({
  activeEventsSort: activeEventsSortReducer,
  eventsBySort: eventsBySortReducer,
  postEvent: postEventReducer,
  form: formReducer
})

export default rootReducer
