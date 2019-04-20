import PropTypes from 'prop-types'
import React from 'react'
import {withRouter} from 'react-router'
import StyledHeader from './Header.styled.js'

import BackButton from '../../BackButton'
import AccountButton from '../../AccountButton'
import Masthead from '../../Masthead'

const Header = ({isHidden, history, ...props}) => {
  return (
    <StyledHeader isHidden={isHidden} {...props}>
      <div className="header-item left">
        <BackButton clickHandler={history.goBack}/>
      </div>
      <div className="header-item mid">
        <Masthead appTitle="spirits"/>
      </div>
      <div className="header-item right">
        <AccountButton/>
      </div>
    </StyledHeader>
  )
}

Header.propTypes = {isHidden: PropTypes.bool.isRequired}
Header.defaultProps = {isHidden: false}

export default withRouter(Header)
