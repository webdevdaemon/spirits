import React from 'react'
import {Page} from '../Layout'
import AuthPopup from '../AuthPopup'

const Login = () => {
  return (
    <Page 
      renderPage={
        props => (
          <AuthPopup/>
        )
      }
    />
  )
}

export default Login