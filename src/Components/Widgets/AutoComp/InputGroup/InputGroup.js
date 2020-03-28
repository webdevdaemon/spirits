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
        type="text"
        autoFocus
        value={value}
        onChange={e => handleChange(e)}
        {...props}
      />
      <span className="icon is-left">
        <i className="fas fa-search"></i>
      </span>
    </>
  )

  return (
    <Styled.InputGroup
      className="field"
      >
        <div
          className={
            `control has-icons-left is-large
            ${ isLoading ? 'is-loading' : '' }`
          }
        >
      <Input/>
        </div>
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
