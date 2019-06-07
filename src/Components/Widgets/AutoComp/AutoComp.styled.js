import styled from 'styled-components'

const _H = '8vh'
const _F = '13vh'

const Styled = {
  AutoComp: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    height: auto;
    margin-bottom: ${_F};
    width: 100vw;
  `,
  InputWrapper: styled.div`
    display: block;
    width: 100vw; 
    position: sticky;
    top: 0;
    margin: ${_H} 0 0 0;
    padding: 0;
    z-index: 1000;

    & {
      @media screen and (max-width: 650px) {
        
      }
    }


  `,
  ResultWrapper: styled.div`
    display: block;
    height: auto;
    width: 100vw; 
  `,
}

export default Styled