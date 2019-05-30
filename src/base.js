import Rebase from 're-base'
import firebase from 'firebase'
import firebaseui from 'firebaseui'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAeEtfyzAnMpQMpjmOoWNSpIr-1OmNnyVc",
  authDomain: "cmorganwebdev-barbacker.firebaseapp.com",
  databaseURL: "https://cmorganwebdev-barbacker.firebaseio.com",
  projectId: "cmorganwebdev-barbacker",
  storageBucket: "cmorganwebdev-barbacker.appspot.com",
  messagingSenderId: "62113307786",
  appId: "1:62113307786:web:c4f14569e5961f87"
}

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  callbacks: {
    signInSuccessWithAuthResult: () => false, // No redirects after signin
  },
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
const ui = new firebaseui.auth.AuthUI(firebase.auth())

export {base}
export {uiConfig}
export {ui}