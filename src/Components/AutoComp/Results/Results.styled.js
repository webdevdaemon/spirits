// import React from 'react'
import styled from 'styled-components'

const Styled = {
  Item: styled.li`
    ${props => (!props.imgUrl ? 'background-color: #ffff55' : '')}
    background-image: url(${({imgUrl}) => imgUrl});
    border-radius: 24px;
    box-shadow: 1px 3px 1px #444;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 240px;
    max-height: 600px;
    width: 100%;
    min-width: 90vw;
    max-width: 900px;
    padding: 0;
    margin: 0 auto;
  `,
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
  `,
}

export default Styled
