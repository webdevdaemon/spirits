import React from 'react'
import Page from '../Layout/Page'

export default () => {
  return (
    <Page
      style={{ justifyContent: 'center' }}
      renderPage={() => <h1 className="loading-screen-text">LOADING...</h1>}
    />
  )
}
