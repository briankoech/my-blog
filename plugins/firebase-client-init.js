import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCunPfycmXqb3xHduPVcu3rFV7jv20XiHo',
  authDomain: 'my-blog-c782c.firebaseapp.com',
  databaseURL: 'https://my-blog-c782c.firebaseio.com',
  projectId: 'my-blog-c782c',
  storageBucket: 'my-blog-c782c.appspot.com',
  messagingSenderId: '151223584825'
}

if (!firebase.apps.length) firebase.initializeApp(config)

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()

export const Auth = firebase.auth()

export const DB = firebase.database()

export default firebase
