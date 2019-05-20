import styled from 'styled-components'

const                                                                       Styled = {
  AutoComp: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    margin-bottom: 13vh;
    width: 100vw;
  `,
  InputWrapper: styled.div`
    display: block;
    width: 100vw; 
    position: sticky;
    top: -15vh;
    margin: 10vh 0 0 0;
    padding: 0;
  `,
  ResultWrapper: styled.div`
    display: block;
    height: auto;
    width: 100vw; 
  `,
}

export default Styled