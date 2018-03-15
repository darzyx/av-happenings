import {eventsDB} from '../Firebase'

export const UPDATE_EVENT_LIKES = 'UPDATE_EVENT_LIKES'

const updateEventLikes = (eid, changeVal) => ({
  type: UPDATE_EVENT_LIKES,
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

      dispatch(updateEventLikes(eid, changeVal))

      eventDB.get()
        .then((event) => {
          eventDB.update({ likeCount: event.data().likeCount + changeVal })
        })
    })
}
