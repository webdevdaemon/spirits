import PropTypes from 'prop-types'
import React from 'react'
import CTX from '../../../context'
import StyledPage from './Page.styled.js'

const Page = ({children, renderPage, ...pageProps}) => {
  return (
    <CTX.Consumer>
      {context => (
        <StyledPage {...pageProps}>
          {renderPage ? renderPage({...pageProps, ...context}) : children}
        </StyledPage>
      )}
    </CTX.Consumer>
  )
}

Page.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.any,
  color: PropTypes.string,
  renderPage: PropTypes.any,
}

Page.defaultProps = {bgColor: '#172040', color: '#E1E8ED'}

export default Page
