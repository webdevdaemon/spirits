import PropTypes from 'prop-types'
import React from 'react'
import CTX from '../../../context'
import StyledPage from './Page.styled.js'

const Page = ({children, renderPage, ...props}) => {
  console.log({'children': children})
  return (
    <CTX.Consumer>
      {context => (
        <StyledPage showHUD={context.showHUD}>
          {renderPage ? renderPage({...props, ...context}) : children}
        </StyledPage>
      )}
    </CTX.Consumer>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  renderPage: PropTypes.func.isRequired,
}

export default Page