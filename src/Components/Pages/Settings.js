import React from 'react'
import Page from '../Layout/Page'
import styled from 'styled-components'

// import PropTypes from 'prop-types'
// const propTypes = { }

const $Settings = styled.div`
  
`

function Settings(props) {
  return (
      <Page renderPage={() => {
        return (
          <h1>Settings</h1>
        )
      }}/>
  )
}


// Settings.propTypes = propTypes

export default Settings