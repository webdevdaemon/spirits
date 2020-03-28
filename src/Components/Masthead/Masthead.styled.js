import styled from 'styled-components'

const StyledMasthead = styled.div`
  background-color: transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 6vmin;
  font-weight: 600;

  height: 8vh;
  max-width: 1080px;
  width: 100%;

  .app-title {
    color: #a5acaf;
    font-family: 'RecMono-CasualItalicSemiBold', 'Croissant One', cursive, serif;
    font-size: 5vh;
  }
`

export default StyledMasthead