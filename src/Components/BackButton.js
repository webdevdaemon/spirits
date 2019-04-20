import React from 'react'
import styled from 'styled-components'
import {IcoGoBack} from '../icons'

const StyledBackButton = styled.a`
  background-color: transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 8vh;
  width: 10vw;
  min-width: 64px;
  max-width: 96px;
`

const BackButton = ({clickHandler}) => (
  <StyledBackButton onClick={clickHandler}>
    <IcoGoBack />
  </StyledBackButton>
)

export default BackButton
