import React from 'react'
import Page from '../Layout/Page'

// import PropTypes from 'prop-types'
// const propTypes = { }

function Random(props) {
  return (
      <Page renderPage={() => {

        return (
          <h1>Randomizer</h1>
        )
      }} />
  )
}

// Random.propTypes = propTypes

export default Random