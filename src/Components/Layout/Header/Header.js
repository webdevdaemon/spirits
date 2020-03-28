import PropTypes from 'prop-types'
import React from 'react'
import {withRouter} from 'react-router'
import AccountButton from '../../AccountButton/AccountButton'
import BackButton from '../../BackButton'
import Masthead from '../../Masthead/Masthead'
import StyledHeader from './Header.styled.js'

const Header = ({
  user = null,
  history,
  handleClickAuthButton,
  ...props
}) => {
  return (
    <StyledHeader {...props}>
      <div className="header-item left">
        <BackButton clickHandler={history.goBack} />
      </div>
      <div className="header-item mid">
        <Masthead appTitle="spirits" />
      </div>
      <div className="header-item right">
        <AccountButton to={user ? "/settings" : "/login"} />
      </div>                
    </StyledHeader>
  )
}

Header.propTypes = {isHidden: PropTypes.bool.isRequired}
Header.defaultProps = {isHidden: false}

export default withRouter(Header)
