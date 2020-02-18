import React from 'react'
import styled from 'styled-components'
import { Page } from '../Layout'

const StyledHome = styled(Page)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    background-color: #e1e8ed;
    color: #00121f;
    display: block;
    border: solid 2px #a5acaf;
    border-radius: 0 16px 0 16px;
    font-family: 'fredoka one', Avenir, sans-serif;
    font-size: 15vmin;

    margin: 0;
    padding: 2.5vh 2.5vw;
  }
`

const Home = () => {
  return <StyledHome renderPage={() => <h1>Spirits</h1>} />
}

export default Home