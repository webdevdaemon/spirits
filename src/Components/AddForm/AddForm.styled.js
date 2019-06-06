import styled from 'styled-components'

const Styled = {
  Form: styled.form`

    margin-top: 10vh;
    width: 100vw;
    min-height: 90vh;
    text-align: center;
  `,
  IngredientInput: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    width: 90%;
    height: 10vh;
    margin: 1vh auto;
    padding: 0;

    .field {
      background-color: azure;
      font-size: 7vh;
      height: auto;

      &.name {
      }
      &.count {
      }
      &.unit {
      }
    }
  `,

  IngredientSaved: styled.li`
    justify-content: space-between;
    background-color: slategrey;
    display: flex;
    width: 90%;
    margin: 1vh auto;
    padding: 1vh 1vw;
    .name-wrap {
      .name {
        display: block;
        align-items: center;
        font-weight: bold;
        width: 80%;
      }
    }
    .info-wrap {
      display: flex;
      justify-content: space-between;
      .measure {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        .count {
          width: 33%;
        }
        .unit {
          width: 67%;
        }
      }
    }
  `,

  SubForm: styled.form`
    @media screen and (min-width: 661px) {
      width: 66%;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    width: 98%;
    margin: 2vh auto;

    .sub-form-header {
      font-weight: bold;
      text-align: center;
      width: 100vw;
    }
  `,
  SubFormWrap: styled.section`
    width: 100vw;
  `
}

export default Styled
