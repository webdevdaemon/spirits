import styled from 'styled-components'
import {GRADIENT, HEIGHT} from '../../../style-vars'

const form = {
  Form: styled.form`
    margin-top: ${HEIGHT.contentMarginTop};
    height: ${HEIGHT.content};
    text-align: center;
    width: 100vw;
    .field.has-addons.ingredient-input {
      background-color: hsl(0, 0%, 96%);
      border-radius: 4px;
      padding: 2.5vh 2.5vw;
      overflow: auto;
      margin: 0 5vw;
      height: auto;
      .rw-widget>.rw-widget-container {
        margin: -2px 0;
        width: 100%;
      }
      .control.multi {
        display: flex;
        align-items: stretch;
        justify-content: space-around;
        .left {
          display: block;
          height: 100%;
          width: 250%;
        }
        .right {
          display: block;
          height: 100%;
          width: 75%;
        }
      }
    }
  `,
// /*
//   SubFormWrap: styled.section`
//     width: 100vw;
//   `,
//   SubForm: styled.div`
// /*  display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 90%;
//     margin: 2vh auto;
//     div {
//       text-align: left;
//       width: 100%;
//       height: 100%;
//     }
//     .submit-ingredient {
//       text-align: right;
//       transform: rotateZ(45deg);
//       color: azure;
//       background-color: green;
//       margin-left: 1vw;
//     }
//     .column {
//       padding-left: 1vw;
//     } */
//   `,
// */
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
    margin: 1vh auto;
    padding: 1vh 1vw;
    width: 90%;
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

//TODO: 
const dropdown = {
  ListComponent: styled.ul`
    background-color: hsl(0, 0, 96%);
    ${GRADIENT.lightA};
    width: 100vw;
    height: 75vh;
    position: absolute;
    top: ${({t}) => t};
    bottom: ${({b}) => b};
    left: ${({l}) => l};
    right: ${({r}) => r};
    z-index: 9999;
    transition: .5s all ease-out;
  `,
  ItemComponent: styled(
    ingredients.IngredientSaved
  )`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `
}

export default {
  ...form,
  ...ingredients,
  ...howTo,
  ...dropdown,
}
