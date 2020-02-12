import styled from 'styled-components'

const Styled = {
  List: styled.ul`
    background-color: transparent;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 0 0 5vh 0;
    padding: 0;

    .item {
      background-color: hsl(240, 75%, 33%);
      background-repeat: no-repeat;
      background-position: 40% 10%;
      height: 10vh;
      width: 70vw;
      padding: 0;
      margin: 0 0 1px 0;
      transition: all 0.7s ease-out;

      .content {
        height: auto;
        min-height: 256px;
        transition: all 0.5s ease-out;

        p {
          background-color: hsla(0, 0%, 0%, 0.9);
          color: hsl(64, 100%, 97%);
          font-family: 'Muli', sans-serif;
          font-size: 5vh;
          text-transform: uppercase;
          font-weight: 300;
          margin: 0;
          padding-left: 12px;
        }

        .item-detail {
          font-family: 'Roboto', sans-serif;
          transition: all 0.5s ease-out;
        }
      }

      /* ACTIVE STATE */
      
      /*region*/
      
      &.active {
        height: auto;
        transition: all 0.5s ease-out;

        .content {
          height: auto;
          transition: all 0.5s ease-out;

          .item-detail {
            display: block;
            background-color: hsla(0, 0%, 0%, 0.75);
            color: hsl(240, 100%, 90%);
            font-family: 'Roboto', sans-serif;
            font-size: 1.2rem;
            margin-top: 20vh;
            padding: 0.5rem 1.5rem;
            transition: all 0.5s ease-out;

            .table-from {
              background-color: transparent;
              display: flex;
              flex-direction: column;
              align-items: stretch;
              justify-content: flex-start;
              width: 100%;

              .entry {
                border-bottom: solid 1px hsl(240, 100%, 90%);
                display: flex;
                justify-content: space-between;
                .key {
                  text-align: left;
                  width: 60%;
                }
                .value {
                  text-align: center;
                  width: 40%;
                }
              }
            }

            .how-to {
              background-color: hsla(0, 0%, 0%, 0);
              color: hsl(0, 0%, 100%);
              font-family: 'lato', sans-serif;
              font-size: 1.5rem;
              font-weight: 200;
              margin: 1rem auto;
              text-transform: none;
            }
          }
        }
      } 
      /*endregion*/
    }
  `,
}

export default Styled
