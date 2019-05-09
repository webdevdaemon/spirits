/**
* @augments {Component<{  handleChange:Function.isRequired,  value:string.isRequired,>}
*/
import React from 'react'
import PropTypes from 'prop-types'
import Styled from './InputGroup.styled'
import {IcoSearch} from '../../../icons'

const InputGroup = ({value, handleChange, ...props}) => {
  console.log('InputGroup: ', {props})
  return (
    <Styled.InputGroup>
      <Styled.Icon>
        <IcoSearch />
      </Styled.Icon>
      <Styled.Input value={value} onChange={e => handleChange(e)} />
    </Styled.InputGroup>
  )
}

InputGroup.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

InputGroup.defaultProps = {
  value: ''
}

export default InputGroup
