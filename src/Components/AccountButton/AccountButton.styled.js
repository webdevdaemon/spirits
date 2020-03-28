import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {COLOR} from '../../style-vars'

const StyledAuthLink = styled(NavLink)`
  background-color: transparent;
  border: solid 1px ${COLOR.silver}
  height: 8vh;
  min-width: 64px;
  max-width: 96px;
  width: 8vh;
`

const StyledAccountButton = styled(StyledAuthLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
  
const StyledAvatarButton = styled(StyledAuthLink)`
  background-image: url("${({src}) => src ? src : ""}");
  border-radius: 100%;
  box-shadow: 2px 1px 1px hsla(360, 0, 13%, 0.667);
`

export {StyledAccountButton, StyledAvatarButton}

