import { UPDATE_LOGIN_STATUS } from '../actions/userActions'

export const logInStatusReducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case UPDATE_LOGIN_STATUS:
      return {
        ...state,
        loggedIn: action.status
      }
    default:
      return state
  }
}
