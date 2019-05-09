import styled from 'styled-components'

const StyledHeader = styled.header`
  background: #0f0f0f;
  /* background: -webkit-linear-gradient(to bottom, #11232F, #00121F);
  background: linear-gradient(to bottom, #11232F, #00121F); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100vw;
  position: absolute;
  top: ${props => props.showHUD ? '0' : '-10vh'};
  left: 0;
  right: 0;
  bottom: auto;
  z-index: 100;
  transition: all 0.33s ease-out;
`

export default StyledHeader