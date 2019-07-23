/**
* @augments {Component<{  showHUD:boolean,  toggleHUD:Function,>}
*/
import PropTypes from 'prop-types'
import React from 'react'
import StyledFooter from './Footer.styled.js'
import Nav from '../../Nav'
import navLinks from '../../../links'

const Footer = ({showHUD, toggleHUD, ...props}) => {
  
  return (
    <StyledFooter showHUD {...props}>
      <Nav navLinks={navLinks}/>
    </StyledFooter>
  )
}

Footer.propTypes = {
  showHUD: PropTypes.bool,
  toggleHUD: PropTypes.func,
}

Footer.defaultProps = {}

export default Footer
