import React from 'react'
import {Page} from '../Layout'

const Random = props => {
  return (
    <Page>
      <h1>Randomizer</h1>
      <p className="p" isReal cb={x => [x]}>
        {`(Randomizes Stuff)`}
      </p>
    </Page>
  )
}

// Random.propTypes = propTypes

export default Random
