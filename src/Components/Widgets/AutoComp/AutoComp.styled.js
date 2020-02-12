import styled from 'styled-components'
import {HEIGHT as H} from '../../../style-vars'

const Styled = {
  AutoComp: styled.div`
    /* 100 Vicious Stance: */
    background-image: linear-gradient(
      -59deg,
      #485563 0%,
      #3a4551 46%,
      #29323c 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: ${H.content};
    width: 100vw;

    overflow: hidden;

    position: absolute;
    top: ${H.header};
    bottom: ${H.footer};
    left: 0;
    right: 0;
    z-index: 100;
  `,
  InputWrapper: styled.div`
    display: block;
    width: 100vw;
    position: sticky;
    padding: 0;
    z-index: 1000;
    /* & {@media screen and (max-width: 650px) {}} */
  `,
  ResultWrapper: styled.div`
    display: block;
    height: auto;
    width: 100vw;
  `,
}

export default Styled
