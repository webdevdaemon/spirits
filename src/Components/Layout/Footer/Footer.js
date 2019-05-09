import PropTypes from 'prop-types'
import React from 'react'
import StyledFooter from './Footer.styled.js'
import Nav from '../../Nav'
import navLinks from '../../../links'

const Footer = props => {
  
  return (
    <StyledFooter {...props}>
      <Nav navLinks={navLinks}/>
    </StyledFooter>
  )
}

Footer.propTypes = { showHUD: PropTypes.bool.isRequired, }

Footer.defaultProps = { showHUD: false, }

export default Footer
