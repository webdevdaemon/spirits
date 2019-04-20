import PropTypes from 'prop-types'
import React from 'react'
import StyledFooter from './Footer.styled.js'
import Nav from '../../Nav'
import navLinks from '../../../links'

const Footer = ({ isHidden, ...props }) => {
  
  return (
    <StyledFooter isHidden={isHidden} {...props}>
      <Nav navLinks={navLinks}/>
    </StyledFooter>
  )
}

Footer.propTypes = {
  isHidden: PropTypes.bool.isRequired,
}

Footer.defaultProps = {
  isHidden: false,
}




export default Footer
