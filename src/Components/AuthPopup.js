import firebase from 'firebase'
import React from 'react'
import {StyledFirebaseAuth} from 'react-firebaseui'

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  // TODO: Setup SignedIn page
  // TODO: Setup SignedOut page
  // TODO: Setup AuthError page
  callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
  },
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
}

const AuthPopup = () => (
  <div className="login-form">
    <StyledFirebaseAuth
      uiConfig={uiConfig}
      firebaseAuth={firebase.auth()} />
  </div>
)

export default AuthPopup
