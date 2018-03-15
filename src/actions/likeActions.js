import {eventsDB, usersDB} from '../Firebase'

export const UPDATE_EVENT_LIKE_COUNT = 'UPDATE_EVENT_LIKE_COUNT'

const updateEventLikeCount = (eid, changeVal) => ({
  type: UPDATE_EVENT_LIKE_COUNT,
  eid,
  changeVal
})

export const likeEvent = (eid, uid) => dispatch => {
  const eventDB = eventsDB.doc(eid)
  const eventUserLikeDB = eventDB.collection('likes').doc(uid)

  eventUserLikeDB.get()
    .then((like) => {
      let changeVal = 0

      if (like.exists) {
        changeVal = -1
        eventUserLikeDB.delete()
      } else {
        changeVal = 1
        eventUserLikeDB.set({ uid: uid })
      }

      dispatch(updateEventLikeCount(eid, changeVal))

      eventDB.get()
        .then((eventSnapshot) => {
          const eventLikeCount = eventSnapshot.data().likeCount
          const eventUserID = eventSnapshot.data().uid

          eventDB.update({ likeCount: eventLikeCount + changeVal })

          usersDB.doc(eventUserID).get()
            .then((userSnapshot) => {
              const userLikeCount = userSnapshot.data().likeCount
              const userDB = usersDB.doc(eventUserID)

              userDB.update({ likeCount: userLikeCount + changeVal })
            })
        })
    })
}
