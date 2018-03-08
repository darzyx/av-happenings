import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {
  getEventsReducer,
  sortEventsReducer,
  postEventReducer
} from './eventsReducers'

const rootReducer = combineReducers({
  getEvents: getEventsReducer,
  sortEvents: sortEventsReducer,
  postEvent: postEventReducer,
  form: formReducer
})

export default rootReducer
