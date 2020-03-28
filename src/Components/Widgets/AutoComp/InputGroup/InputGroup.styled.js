// import React from 'react'
import styled from 'styled-components'
import {HEIGHT as H} from '../../../../style-vars'

const Styled = {

  InputGroup: styled.div`
    .control.has-icons-left{
      background-color: hsla(0, 0%, 100%, 1);
      box-shadow: 0 -2px 1px hsla(0, 0%, 0%, 1);
      display: flex;
      /* height: ${H.header}; */
      justify-content: flex-start;
      align-items: stretch;
      overflow: hidden;
      width: 100vw;
      text-align: left;

      input.input {
        background-color: transparent;
        color: #323232;
        border: none;
        box-shadow: none;
        outline: none;
        text-align: center;
        text-transform: lowercase;
        width: 100%;
      }
    }
  `,

  Icon: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${H.header};
    width: ${H.header};
  `
}

export default Styled