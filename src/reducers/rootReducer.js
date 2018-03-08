import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {
  selectedEventsSortReducer,
  eventsBySortReducer,
  postEventReducer
} from './eventsReducers'

const rootReducer = combineReducers({
  selectedEventsSort: selectedEventsSortReducer,
  eventsBySort: eventsBySortReducer,
  postEvent: postEventReducer,
  form: formReducer
})

export default rootReducer
