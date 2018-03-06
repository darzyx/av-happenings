import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import getEventsReducer from './getEventsReducer'
import postEventReducer from './postEventReducer'

const rootReducer = combineReducers({
  getEvents: getEventsReducer,
  postEvent: postEventReducer,
  form: formReducer
})

export default rootReducer
