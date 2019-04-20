import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {base} from './base'

import CTX from './context'
import View from './Components/Layout/View'
import PageRouter from './PageRouter'
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'
import ScrollY from './Components/Utilities/ScrollY/ScrollY'

// import styled from 'styled-components'

// const StyledApp = styled.main`
//   background-image: background: #000000;
//   background: -webkit-linear-gradient(
//     to bottom,
//     #121212,
//     #000000
//   );
//   background: linear-gradient(
//     to bottom,
//     #121212,
//     #000000
//   );

//   max-height: 100vh;
//   max-width: 100vw;
//   height: 100%;
//   width: 100%;
//   overflow: hidden;
// `

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      userID: null,
      isAuthenticated: false,
      isAdmin: false,
      categories: {},
      glasses: {},
      ingredients: {},
      listResults: [],
      recipes: {},
      searchCache: {},
      searchCacheRoster: new Set(),
    }
  }

  /* -------------------- Authentication/Account -------------------- */

  setAppState = next => this.setState(next => ({...next}))
  setUserState = ({user}) => {
    if (!!user) {
      this.setState(() => ({
        user,
        isAuthenticated: true,
        userID: user.providerData.uid,
      }))
    }
  }

  /* ------------- Sync/Bind to firebase (via re-base) ------------- */

  dbSync = endpoint =>
    base.syncState(`${endpoint}`, {
      context: this,
      state: `${endpoint}`,
    })

  dbBind = endpoint =>
    base.bindToState(`${endpoint}`, {
      context: this,
      state: `${endpoint}`,
    })

  /*  -------------- Bind State to firebase @ Mount --------------
      -------------- Automatically unBinds @unmount --------------  */

  componentDidMount() {
    this.dbSync('ingredients')
    this.dbSync('glasses')
    this.dbSync('categories')
    this.dbSync('recipes')
    this.dbSync('searchCache')
  }

  render() {
    const ctx = {
      ...this.state,
      setAppState: this.setAppState,
      setUserState: this.setUserState,
    }

    return (
      <ScrollY.Setter>
        <CTX.Provider value={ctx}>
          <BrowserRouter>
            <View>
              <ScrollY.Getter>
                <Header />
                <PageRouter />
                <Footer />
              </ScrollY.Getter>
            </View>
          </BrowserRouter>
        </CTX.Provider>
      </ScrollY.Setter>
    )
  }
}

export default App
