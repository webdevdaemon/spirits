import styled from 'styled-components'

const Styled = {
  SectionHeader: styled.h3`
    font-weight: bold;
    text-align: center;
    width: 100vw;
  `,
  Form: styled.form`
    margin-top: 10vh;
    width: 100vw;
    min-height: 90vh;
    text-align: center;
  `,

  IngredientSaved: styled.li`
    align-items: center;
    width: 80%;
    margin: 1vh auto;
    padding: 1vh 1vw;
    @media screen and (min-width: 661px) {
      width: 50%;
    }
  `,

  SubForm: styled.div`
    @media screen and (min-width: 661px) {
      width: 66%;
    }
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    width: 98%;
    margin: 2vh auto;

    div {
      text-align: left;
      width: 100%;
      height: 100%;
    }

    .ing-sub {
      transform: rotateZ(45deg);
      color: azure;
      background-color: green;
    }

    .columns .column {
      margin-right: 6px;
    }
  `,

  SubFormWrap: styled.section`
    width: 100vw;
  `,
}

export default Styled
