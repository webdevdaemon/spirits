import styled from 'styled-components'

const _H = '8vh'

const StyledHeader = styled.header`
  background: #0f0f0f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${_H};
  width: 100vw;
  position: absolute;
  top: ${props => props.showHUD ? '0' : -_H};
  left: 0;
  right: 0;
  bottom: auto;
  z-index: 100;
  transition: all 0.33s ease-out;
`

export default StyledHeader