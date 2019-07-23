import styled from 'styled-components'
import {HEADER_HEIGHT} from '../Header/Header.styled'
import {FOOTER_HEIGHT} from '../Footer/Footer.styled'

const PAGE_HEIGHT = `${100 - (HEADER_HEIGHT + FOOTER_HEIGHT)}` //?

const StyledPage = styled.main`
  height: ${props => props.showHUD ? PAGE_HEIGHT + 'vh' : '100vh'};
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  position: absolute;
  top: ${props => props.showHUD ? HEADER_HEIGHT + 'vh' : '0'};
  bottom: ${props => props.showHUD ? FOOTER_HEIGHT + 'vh' : '0'};
  left: 0;
  right: 0;
  transition: all 0.33s ease-out;
`
export default StyledPage
