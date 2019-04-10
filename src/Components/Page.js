import React from 'react'
import styled from 'styled-components'

const $Page = styled.main`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`
const Page = ({children, render, ...props}) => {
  return <$Page>{render ? render(props) : children}</$Page>
}


export default Page
