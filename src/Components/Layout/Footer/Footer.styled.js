import styled from 'styled-components'

const FOOTER_HEIGHT = 13

const StyledFooter = styled.footer`
  background-color: #0f0f0f;
  color: #E1E8ED;
  height: ${FOOTER_HEIGHT};
  width: 100vw;
  overflow: hidden;
  position: absolute;
  bottom: ${props => (props.showHUD ? '0' : '-' + FOOTER_HEIGHT + 'vh')};
  left: 0;
  right: 0;
  top: auto;
  z-index: 100;
  transition: all 0.33s ease-out;
`
export {FOOTER_HEIGHT}
export default StyledFooter
