import styled from 'styled-components'
import {HEIGHT} from '../../../style-vars'

const form = {
  Form: styled.form`
    margin-top: ${HEIGHT.contentMarginTop};
    text-align: center;
    height: ${HEIGHT.content};
    width: 100vw;
    
    .field.has-addons.ingredient-input {
      background-color: hsl(0, 0%, 96%);
      border-radius: 4px;
      padding: 2.5vh 2.5vw;
      margin: 0 5vw;
      
      overflow: auto;
      height: auto;
      
      .rw-widget>.rw-widget-container {
        width: 100%;
        margin: -2px 0;
      }
      
      .control.multi {
        display: flex;
        justify-content: space-around;
        align-items: stretch;
        .left {
          display: block;
          width: 250%;
          height: 100%;
        }
        .right {
          display: block;
          width: 75%;
          height: 100%;
        }
      }
    }
  `,
  SubFormWrap: styled.section`
    /* width: 100vw; */
  `,
  SubForm: styled.div`
/*  display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 2vh auto;
    div {
      text-align: left;
      width: 100%;
      height: 100%;
    }
    .submit-ingredient {
      text-align: right;
      transform: rotateZ(45deg);
      color: azure;
      background-color: green;
      margin-left: 1vw;
    }
    .column {
      padding-left: 1vw;
    } */
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
    width: 90%;
    margin: 1vh auto;
    padding: 1vh 1vw;
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
