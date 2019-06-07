import PropTypes from 'prop-types'
import React, {useState, useContext} from 'react'
import InputGroup from './InputGroup'
import Results from './Results'
import Context from '../../../context'
import autoComp from '../../../utils/searchModule'

import Styled from './AutoComp.styled'

const AutoComp = () => {
  const context = useContext(Context)
  const [value, setValue] = useState()
  const [results, setResults] = useState()

  const handleChange = e => {
    const {searchCache, setAppState} = context
    const val = e.target.value
    setValue(val)

    if (searchCache.hasOwnProperty(val)) {
      setResults(searchCache[val])
    } else {
      autoComp(val)
        .then(r => {
          setResults(r)
          return r
        })
        .then(r => {
          setAppState({searchCache: {[val]: r, ...searchCache}})
        })
        .catch(err => Error(err))
    }
  }

  return (
    <Styled.AutoComp>
      <Styled.InputWrapper>
        <InputGroup value={value} handleChange={handleChange} />
      </Styled.InputWrapper>
      <Styled.ResultWrapper>
        <Results results={value !== "" ? results : null} emptyMessage="No Matching Recipes..." />
      </Styled.ResultWrapper>
    </Styled.AutoComp>
  )
}

AutoComp.propTypes = {
  cb: PropTypes.shape({
    handleSearch: PropTypes.func,
    setAppState: PropTypes.func,
    toggleHUD: PropTypes.func,
  }).isRequired,
}

export default AutoComp
