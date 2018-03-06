import * as firebase from 'firebase'
import 'firebase/firestore'

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDHjXI07A9Jk0NobMnif3GZzCmG0OpK75Y",
  authDomain: "my-demo-project-20371.firebaseapp.com",
  databaseURL: "https://my-demo-project-20371.firebaseio.com",
  projectId: "my-demo-project-20371",
  storageBucket: "my-demo-project-20371.appspot.com",
  messagingSenderId: "734902640250"
}

firebase.initializeApp(FIREBASE_CONFIG)

export const eventsDB = firebase.firestore().collection('events')
