import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const Styled = {
  Nav: styled.nav`
    background-color: transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 13vh;
    width: 100vw;
  `,
  NavLink: styled(NavLink)`
    background-color: transparent;
    height: 100%;
    width: ${props => (props.width ? props.width : '100%')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-right: solid 1px #555;

    &:last-child {
      border-right: none !important;
    }
    &.active {
      background-color: #000;
      color: #ffff99;
      i,
      p {
        color: #ffff99 !important;
      }
    }

    .nav-link-label {
      color: #666666;
      font-size: 6px;
      font-family: 'roboto condensed', Avenir, sans-serif;
      font-weight: 300;
      text-align: center;
      margin: 0;
      padding: 0;

      text-transform: capitalize;
      text-decoration: none !important;
    }
  `,
}

export default Styled