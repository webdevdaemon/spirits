// import React from 'react'
import styled from 'styled-components'

const _H = '8vh'

const Styled = {

  InputGroup: styled.div`
    background-color: hsla(0, 0%, 100%, 1);
    box-shadow: 0 -2px 1px hsla(0, 0%, 0%, 1);
    display: flex;
    height: ${_H};
    justify-content: flex-start;
    overflow: hidden;
    width: 100%;
    text-align: left;

    input.input {
      background-color: transparent;
      color: #323232;
      border: none;
      box-shadow: none;
      font-size: 6vh;
      outline: none;
      width: 80%; /* important for centering of cursor */
      text-align: center;
      text-transform: uppercase;
    }
  `,

  Icon: styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
  `
}

export default Styled