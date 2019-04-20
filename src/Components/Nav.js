import React from 'react'
import PropTypes from 'prop-types'
import Styled from './Nav.styled.js'

const mapRender = (obj, dex, links) => (
  <Styled.NavLink
    to={obj.path}
    key={`${obj.path}_${dex}`}
    activeClassName="active"
    className="nav-link"
    style={{
      width: `${100 / links.length}vw`,
      height: '13vh',
    }}
  >
    {obj.iconComponent}
    {obj.labelComponent}
  </Styled.NavLink>
)

const Nav = ({navLinks}) => (
  <Styled.Nav>
    {navLinks.map(mapRender)}
  </Styled.Nav>
)

Nav.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      iconComponent: PropTypes.node.isRequired,
      labelComponent: PropTypes.node.isRequired,
    }),
  ).isRequired,
}

export default Nav
