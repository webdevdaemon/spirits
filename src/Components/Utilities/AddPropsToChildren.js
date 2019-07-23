/**
* @augments {Component<{  children:node,  addProps:object,>}
*/
import React, {Children, cloneElement} from 'react'
import PropTypes from 'prop-types'

const AddPropsToChildren = ({children, addProps}) => (
  <>
    {Children.map(children, child =>
      cloneElement(child, {...addProps}),
    )}
  </>
)

AddPropsToChildren.propTypes = {
  children: PropTypes.node,
  addProps: PropTypes.object,
}

export default AddPropsToChildren
