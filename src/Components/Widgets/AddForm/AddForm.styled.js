import styled from 'styled-components'

const form = {
  Form: styled.form`
    margin-top: 10vh;
    width: 100vw;
    min-height: 90vh;
    text-align: center;
  `,
  SubFormWrap: styled.section`
    width: 100vw;
  `,
  SubForm: styled.div`
    @media screen and (min-width: 661px) {
      width: 67%;
    }
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    width: 90%;
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
  SectionHeader: styled.h3`
    font-weight: bold;
    text-align: center;
    width: 100vw;
  `,
}
const ingredients = {
  SavedIngredientsList: styled.ul`
    margin-bottom: 5vh;
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
}
const howTo = {
  HowToWrap: styled.div`
    display: flex;
    width: 100vw;
  `,
  HowTo: styled.textarea`
    display: block;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 2.5vh auto;
    width: 80%;
  `,
}

export default {
  ...form,
  ...ingredients,
  ...howTo,
}
