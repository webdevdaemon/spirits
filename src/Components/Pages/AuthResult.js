import React from 'react'

const AuthResult = ({user}) => {
  return (
    <div>
      {user ? 'signed in' : 'guest'}
    </div>
  )
}

export default AuthResult
