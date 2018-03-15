import {eventsDB} from '../Firebase'

export const LIKE_EVENT_INCREMENT = 'LIKE_EVENT_INCREMENT'
export const LIKE_EVENT_DECREMENT = 'LIKE_EVENT_DECREMENT'

const likeEventIncrement = () => ({
  type: LIKE_EVENT_INCREMENT
})

const likeEventDecrement = () => ({
  type: LIKE_EVENT_DECREMENT
})

export const likeEvent = (eid, uid) => dispatch => {
  const eventDB = eventsDB.doc(eid)
  const eventUserLikeDB = eventDB.collection('likes').doc(uid)

  eventUserLikeDB.get()
    .then((like) => {
      let changeVal = 0

      if (like.exists) {
        changeVal = -1
        dispatch(likeEventDecrement())
        eventUserLikeDB.delete()
      } else {
        changeVal = 1
        dispatch(likeEventIncrement())
        eventUserLikeDB.set({ uid: uid })
      }

      eventDB.get()
        .then((event) => {
          eventDB.update({ likeCount: event.data().likeCount + changeVal })
        })
    })
}
