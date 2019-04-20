import styled from 'styled-components'

const StyledPage = styled.section`
  background-color: ${props => props.bgColor || 'initial'};
  color: ${props => props.color || 'initial'};
  max-height: 100vh;
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  margin: 0;
  padding: 10vh 0 15vh 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
export default StyledPage
