import React from 'react'
import {StyledFirebaseAuth} from 'react-firebaseui'
import {uiConfig} from '../base'
import firebase from 'firebase'

const AuthPopup = () => (
  <div className="login-form">
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  </div>
)

export default AuthPopup
