import PropTypes from "prop-types";
import React, { Children, cloneElement } from 'react'

const UtilityWrapper = ({children, withProps, withCondition, withFX, }) => {
  
  if (withFX) Children.forEach(children, child => withFX(child))
  
  const NewChildren = () =>
    Children.map(children, child => withCondition
      ? withCondition(cloneElement(child, withProps))
      : cloneElement(child, withProps)
    
  return (
    <>{NewChildren()}</>
  )
}

UtilityWrapper.propTypes = {
  children: PropTypes.any,
  withProps = PropTypes.object,
  withCondition = PropTypes.func,
  withFX = PropTypes.func,
}
UtilityWrapper.defaultProps = {
  withProps = {},
  withCondition = null,
  withFX = null
}

export default UtilityWrapper