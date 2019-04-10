import React from 'react'
import Page from '../Page'
import styled from 'styled-components'

// import PropTypes from 'prop-types'
// const propTypes = { }

const $Home = styled.div`

`

function Home(props) {
  return (
      <Page render={() => {
        return (
          <h1>Home</h1>
        )
      }} />
  )
}


// Home.propTypes = propTypes

export default Home