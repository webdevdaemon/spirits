import styled from 'styled-components'

const StyledPage = styled.main`
  /* background-color: ${props => props.bgColor || 'initial'}; */
  /* color: ${props => props.color || 'initial'}; */
  /* max-height: 100vh; */
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0;
  padding: ${props => props.showHUD ? '10vh 0 0 0' : '0'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all .33s ease-out;
`
export default StyledPage
