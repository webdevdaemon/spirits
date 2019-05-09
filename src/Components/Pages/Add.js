import React from 'react'
import Page from '../Layout/Page'

function Add(props) {
  const renderPage = () => (
    <>
      <h2>Add A Recipe</h2>
      <form>
        {Array.from({length: 50}).map((a, i) => (
          <p key={i + ''} type="text">{i+""}</p>
        ))}
      </form>
    </>
  )

  return <Page renderPage={() => renderPage(props)} />
}

export default Add
