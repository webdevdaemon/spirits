import React from 'react'
import StyledMasthead from './Masthead.styled.js'

const Masthead = ({appTitle}) => {
  return (
    <StyledMasthead>
      <h1 className="app-title">{appTitle}</h1>
    </StyledMasthead>
  )
}

export default Masthead
