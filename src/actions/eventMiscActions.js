export const SELECT_EVENTS_SORT = 'SELECT_EVENTS_SORT'

export const VOID_GOTTEN_EVENTS = 'VOID_GOTTEN_EVENTS'

export const selectEventsSort = eventsSort => ({
  type: SELECT_EVENTS_SORT,
  eventsSort
})

export const voidGottenEvents = eventsSort => ({
  type: VOID_GOTTEN_EVENTS,
  eventsSort
})
