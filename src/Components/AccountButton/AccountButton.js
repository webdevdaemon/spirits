import React from 'react'
import {IcoAccount} from '../../icons'
import {StyledAccountButton, StyledAvatarButton} from './AccountButton.styled'

const AccountButton = ({user = null}) => {
  const src = user ? user.photoURL : ''
  const isSignedIn = !!user

  return !isSignedIn ? (
    <StyledAccountButton to='/login'>
      <IcoAccount />
    </StyledAccountButton>
  ) : (
    <StyledAvatarButton src={src} to='/settings'/>
  )
}

export default AccountButton
