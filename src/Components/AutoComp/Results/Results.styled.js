// import React from 'react'
import styled from 'styled-components'

const Styled = {
  List: styled.ul`
    background-color: transparent;
    height: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 0;
    padding: 0;

    .item {
      background-blend-mode: darken;
      background-size: cover;
      background-repeat: norepeat;
      background-position: 50% 10%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      height: 100%;
      max-height: 96px;
      width: 100vw;
      padding: 1vh 2vw;
      margin: 0;
      transition: all 0.5s ease-out;

      p {
        background-color: rgba(0, 0, 0, 0.66);
        border-radius: 8px;
        color: #fafafa;
        font-size: 12vh;
        padding: 1vh 2.5vw;
      }

      .item-detail {
        transition: height 0.5s ease-out;
        margin-bottom: 3vh;
        background-color: transparent;
        padding: 0;
        width: 100%;
        /* height: 0; */
      }

      &.active {
        
        .item-detail {
          transition: height 0.5s ease-out;
          margin-bottom: 3vh;
          background-color: hsla(0, 0%, 100%, 0.75);
          font-size: 1rem;
          padding: 1vh 1vw;
          max-width: 660px;
          height: auto;
        }
      }
    }
  `,
}

export default Styled
