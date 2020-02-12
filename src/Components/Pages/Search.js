import React from 'react'
import Page from '../Layout/Page'
import AutoComp from '../Widgets/AutoComp/AutoComp'

const Search = props => {
  return (
    <Page
      className="page search"
      renderPage={
        propsAndContext => <AutoComp {...propsAndContext} />
      }
    />
  )
}

export default Search
