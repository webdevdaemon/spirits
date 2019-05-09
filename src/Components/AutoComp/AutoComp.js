import PropTypes from 'prop-types'
import React, {useState, useContext, useEffect} from 'react'
import InputGroup from './InputGroup'
import Results from './Results'
import Context from '../../context'
import autoComp from '../../utils/searchModule'

const AutoComp = () => {
  const context = useContext(Context)
  const [value, setValue] = useState()
  const [results, setResults] = useState()

  useEffect(() => {
    const _results = autoComp(value)
    if (Array.isArray(_results)) {
      setResults([..._results])
    } else if (_results instanceof Promise) {
      _results.then(
        res => setResults([...res]),
        err =>
          console.error(
            'Culprit: <Autocomp/> -> useEffect -> results (Promise)',
            err,
          ),
      )
    }
  }, [value, results, context])

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <>
      <InputGroup value={value} handleChange={handleChange} />
      <Results results={results} />
    </>
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
