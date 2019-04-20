import React from 'react'
import styled from 'styled-components'

const StyledMasthead = styled.div`
  background-color: transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 6vmin;

  height: 8vh;
  max-width: 1080px;

  .app-title {
    color: #a5acaf;
    font-family: Aldrich, Avenir, sans-serif;
    font-size: 7vh;

  }
`

const Masthead = ({appTitle}) => {
  return (
    <StyledMasthead>
      <h1 className="app-title">{appTitle}</h1>
    </StyledMasthead>
  )
}

export default Masthead
