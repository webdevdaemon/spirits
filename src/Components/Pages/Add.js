import React from 'react'
import Page from '../Layout/Page'
import AddForm from '../Widgets/AddForm'

import 'react-widgets/dist/css/react-widgets.css'

const Add = () => {
  return (
    <Page
      className="page add"
      renderPage={
        propsAndContext => (
          <AddForm {...propsAndContext} />
        )
      }
    />
  )
}

export default Add
