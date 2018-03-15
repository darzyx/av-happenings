import { CACHE_USER_DATA, RESET_USER_DATA } from '../actions/userActions'

const initUserState = {
  loggedIn: false,
  username: ' ',
  email: ' ',
  likeCount: 0,
  eventCount: 0,
  uid: ' ',
  loaded: false
}

export const userReducer = (state = initUserState, action) => {
  switch (action.type) {
    case CACHE_USER_DATA:
      return {
        ...state,
        ...action.userData,
        loggedIn: true,
        loaded: true
      }
    case RESET_USER_DATA:
      return {
        ...initUserState,
        loaded: true
      }
    default:
      return state
  }
}
