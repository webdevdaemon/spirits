import styled from 'styled-components'

const HEADER_HEIGHT = 9

const StyledHeader = styled.header`
  background: #0f0f0f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${HEADER_HEIGHT};
  width: 100vw;
  position: absolute;
  top: ${props => props.showHUD ? '0' : '-' + HEADER_HEIGHT};
  left: 0;
  right: 0;
  bottom: auto;
  z-index: 100;
  transition: all 0.33s ease-out;
`
export {HEADER_HEIGHT}
export default StyledHeader