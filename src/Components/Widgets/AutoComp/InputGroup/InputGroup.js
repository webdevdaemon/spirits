/**
 * @augments {Component<{  handleChange:Function.isRequired,  value:string.isRequired,>}
 */
import React from 'react'
import PropTypes from 'prop-types'
import Styled from './InputGroup.styled'
import {IcoSearch} from '../../../../icons'

const InputGroup = ({value, handleChange}) => {
  const Input = props => <input {...props} />

  return (
    <Styled.InputGroup>
      <Styled.Icon>
        <IcoSearch />
      </Styled.Icon>
      <Input
        autoFocus
        value={value}
        className="input"
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
