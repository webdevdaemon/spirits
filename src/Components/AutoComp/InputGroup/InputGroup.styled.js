// import React from 'react'
import styled from 'styled-components'

export default {
  InputGroup: styled.div`
    background-color: #ffffaa;
    display: flex;
    height: 10vh;
    justify-content: flex-start;
    overflow: hidden;
    width: 100%;
    text-align: left;
  `,
  Input: styled.input`
    background-color: transparent;
    color: #444;
    border: none;
    box-shadow: none;
    font-size: 5vh;
    outline: none;
    width: 80%; /* important for centering of cursor */
    text-align: center;
  `,
  Icon: styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
  `
}