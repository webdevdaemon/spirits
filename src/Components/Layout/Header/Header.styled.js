import styled from 'styled-components'
import {HEIGHT as H} from '../../../style-vars.js'

const StyledHeader = styled.header`
  background: #0f0f0f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${H.header};
  width: 100vw;
  position: absolute;
  top: ${props => props.showHUD ? '0' : -H.header};
  right: 0; bottom: auto; left: 0;
  z-index: 100;
  transition: all 0.33s ease-out;
  
 .navbar {
   width: 100vw;
   
 } 
`

export default StyledHeader