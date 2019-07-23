import styled from 'styled-components'

const form = {
  Form: styled.form`
    margin-top: 10vh;
    margin-bottom: 15vh;
    max-width: 550px;
    width: 100%;
    text-align: center;
  `,
  Section: styled.section`
    background-color: ${props => props.bgColor || '#BBBCBF'};
    margin: 2.5vh auto;
    padding: 2.5vh 1vw 4vh 1vw;
    width: 100%;
  `,
  SubForm: styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 90%;
    margin: 2vh auto;
    div {
      text-align: left;
      width: 100%;
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
    width: 90%;
    margin: 1vh auto 5vh auto;
  `,
  SavedIngredient: styled.li`
    background-color: #0f0f0f;
    color: #dfdfdf;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 1vh auto;
    padding: 1vh 1vw;
  `,
}
const howTo = {
  HowToWrap: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
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
