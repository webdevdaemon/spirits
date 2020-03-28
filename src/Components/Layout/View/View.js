import React, {Children, cloneElement, useState} from 'react'
import styled from 'styled-components'
import {HEIGHT as H} from '../../../style-vars'

const StyledView = styled.div`
  display: flex;
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  height: 100vh;
  width: 100vw;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  header {
    height: ${H.header}
  }
  main {
    height: ${H.content}
  }
  footer {
    height: ${H.footer}
  }
`

const View = ({children, ...props}) => {
  const [showHUD, setShowHUD] = useState(true)
  const toggleHUD = () => setShowHUD(!showHUD)

  return (
    <StyledView>
      {Children.map(children, child =>
        cloneElement(child, {showHUD, toggleHUD, ...props}),
      )}
    </StyledView>
  )
}

export default View
