/**
* @augments {Component<{  showHUD:boolean.isRequired,  toggleHUD:Function.isRequired,  history:object,>}
*/
import PropTypes from 'prop-types'
import React from 'react'
import {withRouter} from 'react-router'
import StyledHeader from './Header.styled.js'

import BackButton from '../../BackButton'
import AccountButton from '../../AccountButton'
import Masthead from '../../Masthead'

const Header = ({history, ...props}) => {
  return (
    <StyledHeader {...props}>
      <div className="header-item left">
        <BackButton clickHandler={history.goBack} />
      </div>
      <div className="header-item mid">
        <Masthead appTitle="spirits" />
      </div>
      <div className="header-item right">
        <AccountButton />
      </div>
    </StyledHeader>
  )
}

Header.propTypes = {
  showHUD: PropTypes.bool.isRequired,
  toggleHUD: PropTypes.func.isRequired,
  history: PropTypes.object,
}
Header.defaultProps = {}

export default withRouter(Header)
