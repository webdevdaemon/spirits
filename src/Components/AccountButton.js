import React from 'react'
import styled from 'styled-components'
import {IcoAccount} from '../icons'

const StyledAccountButton = styled.div`
  background-color: transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 8vh;
  width: 8vh;
  min-width: 64px;
  max-width: 96px;
`

const AccountButton = props => {
  return (
    <StyledAccountButton>
      <IcoAccount/>
    </StyledAccountButton>
  )
}

export default AccountButton
