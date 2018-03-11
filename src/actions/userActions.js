import { userAuth } from '../Firebase'

export const UPDATE_LOGIN_STATUS = 'UPDATE_LOGIN_STATUS'

const updateLogInStatus = status => ({
  type: UPDATE_LOGIN_STATUS,
  status
})

export const watchLogInStatus = () => dispatch => {
  userAuth.onAuthStateChanged((user) => dispatch(updateLogInStatus(!!user)) )
}
