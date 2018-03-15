import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { reducer as formReducer } from 'redux-form'
import { commentsReducer } from './commentReducers'
import { eventsSortReducer } from './eventsSortReducer'
import { eventPostReducer } from './eventPostReducer'
import { eventsBySortReducer } from './eventsBySortReducer'

const rootReducer = combineReducers({
  user: userReducer,
  eventsSort: eventsSortReducer,
  eventsBySort: eventsBySortReducer,
  eventPost: eventPostReducer,
  comments: commentsReducer,
  form: formReducer
})

export default rootReducer
