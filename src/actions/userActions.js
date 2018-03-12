import { userAuth, usersDB } from '../Firebase'

export const CACHE_USER_DATA = 'CACHE_USER_DATA'
export const RESET_USER_DATA = 'RESET_USER_DATA'

const cacheUserData = userData => ({
  type: CACHE_USER_DATA,
  userData
})

const resetUserData = () => ({
  type: RESET_USER_DATA
})

const getUserData = () => dispatch => {
  const { uid } = userAuth.currentUser

  usersDB.doc(uid).get().then(
    (user) => { dispatch(cacheUserData(user.data())) },
    // TODO: Inform the user of this error
    () => console.log('Could not fetch the user\'s information.')
  )
}

export const observeLoginStatus = () => dispatch => {
  userAuth.onAuthStateChanged((user) => {
    if (user) { dispatch(getUserData()) }
    else { dispatch(resetUserData()) }
  })
}
