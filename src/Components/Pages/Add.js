import React from 'react'
import Page from '../Layout/Page'

function Add(props) {

  const renderPage = () => (
    <section attached="top">
      <h2>Add A Recipe</h2>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    </section>
  )

  return (
    <Page renderPage={() => renderPage(props)} />
  )
}

// Add.propTypes = propTypes

export default Add