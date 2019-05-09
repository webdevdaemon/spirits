import PropTypes from 'prop-types'
import React from 'react'
import CTX from '../../../context'
import StyledPage from './Page.styled.js'

const Page = ({children, renderPage, showHUD, ...pageProps}) => {
  return (
    <CTX.Consumer>
      {context => (
        <StyledPage showHUD={showHUD}>
          {renderPage ? renderPage({showHUD, ...context}) : children}
        </StyledPage>
      )}
    </CTX.Consumer>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  renderPage: PropTypes.func.isRequired,
  showHUD: PropTypes.bool.isRequired,
}

export default Page