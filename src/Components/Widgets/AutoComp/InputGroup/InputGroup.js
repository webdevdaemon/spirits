/**
* @augments {Component<{  handleChange:Function.isRequired,  value:string.isRequired,>}
*/
import PropTypes from 'prop-types'
import React from 'react'
import Styled from './InputGroup.styled'

const InputGroup = ({value, handleChange, isLoading}) => {
  const Input = ({isLoading = true, ...props}) => (
    <>
      <input
        className={`input is-large is-expanded`}
        placeholder="search"
        type="text"
        {...props}
      />
      <span className="icon is-left">
        <i className="fas fa-search"></i>
      </span>
    </>
  )

  return (
    <Styled.InputGroup
      className={
        `control has-icons-left ${isLoading ? 'is-loading' : ''}`
      }
    >
      <Input
        autoFocus
        value={value}
        className={`input`}
        placeholder={`search`}
        onChange={e => handleChange(e)}
      />
    </Styled.InputGroup>
  )
}

InputGroup.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

InputGroup.defaultProps = {
  value: '',
}

export default InputGroup
