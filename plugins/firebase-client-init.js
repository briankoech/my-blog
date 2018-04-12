import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyD-t07e32EOotE3jw-uZNTZ2NT8MNU9mM4',
  authDomain: 'natedemo-b867e.firebaseapp.com',
  databaseURL: 'https://natedemo-b867e.firebaseio.com',
  projectId: 'natedemo-b867e',
  storageBucket: 'natedemo-b867e.appspot.com',
  messagingSenderId: '781275331673'
}

if (!firebase.apps.length) firebase.initializeApp(config)

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()

export const Auth = firebase.auth()

export const DB = firebase.database()

export default firebase
