import { CACHE_USER_DATA, RESET_USER_DATA } from '../actions/userActions'

const initUserState = {
  loggedIn: false,
  displayName: ' ',
  email: ' ',
  likeCount: 0,
  eventCount: 0
}

export const userReducer = (state = initUserState, action) => {
  switch (action.type) {
    case CACHE_USER_DATA:
      return {
        ...state,
        loggedIn: true,
        ...action.userData
      }
    case RESET_USER_DATA:
      return initUserState
    default:
      return state
  }
}
