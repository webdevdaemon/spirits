import React from 'react'
import {
  // Button,
  Form,
  Grid,
  Header,
  // Image,
  Message,
  Segment,
} from 'semantic-ui-react'
import { StyledFirebaseAuth } from 'react-firebaseui'
import { uiConfig } from '../base'
import firebase from 'firebase'

const AuthPopup = () => (
  <div className="login-form">
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>
      {`
      body div,
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
    </style>
    <Grid textAlign="center" style={{height: '100%'}} verticalAlign="middle">
      <Grid.Column style={{maxWidth: 450}}>
        <Header as="h2" color="teal" textAlign="center">
          {/* <Image src="" />  */}
          Choose a way to Signup/Login
        </Header>
        <Form size="large">
          <Segment stacked>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()} />

          </Segment>
        </Form>
        <Message>
          New to us? <a href="/">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default AuthPopup
