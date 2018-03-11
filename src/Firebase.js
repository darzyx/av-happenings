import * as firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyDvooP-CY4nvS7jcHyTJYGRIJym2gSWZFA',
  authDomain: 'av-happenings-project.firebaseapp.com',
  databaseURL: 'https://av-happenings-project.firebaseio.com',
  projectId: 'av-happenings-project',
  storageBucket: 'av-happenings-project.appspot.com',
  messagingSenderId: '410209896028'
}

firebase.initializeApp(config)

const database = firebase.firestore

export const userAuth = firebase.auth()

export const usersDB = database().collection('users')
export const eventsDB = database().collection('events')
export const reportsDB = database().collection('reports')
export const commentsDB = database().collection('comments')

export const timestamp = database.FieldValue.serverTimestamp()
