import { SELECT_EVENTS_SORT } from '../actions/eventMiscActions'

export const eventsSortReducer = (state = 'new', action) => {
  switch (action.type) {
    case SELECT_EVENTS_SORT:
      return action.eventsSort
    default:
      return state
  }
}
