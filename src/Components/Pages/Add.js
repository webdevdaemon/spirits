import React from 'react'
import 'react-widgets/dist/css/react-widgets.css'
import {Page} from '../Layout'
import AddForm from '../Widgets/AddForm'

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
