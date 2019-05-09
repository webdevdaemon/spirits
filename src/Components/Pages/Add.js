import React from 'react'
import Page from '../Layout/Page'

function Add(props) {
  const renderPage = () => (
    <>
      <h2>Add A Recipe</h2>
      <form>
        {Array.from({length: 50}).map((a, i) => (
          <input key={i + ''} style={{ display: 'block' }} type="text" defaultValue={i}/>
        ))}
      </form>
    </>
  )

  return <Page renderPage={() => renderPage(props)} />
}

// Add.propTypes = propTypes

export default Add
