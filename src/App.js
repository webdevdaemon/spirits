import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {base} from './base'
import Main from './Sections/Main'

import '../node_modules/@blueprintjs/core/lib/css/blueprint.css'
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css'

import AppContext from './context'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      userID: null,
      isAuthenticated: false,
      isAdmin: false,
      categories: {},
      drinks: {},
      glasses: {},
      ingredients: {},
      listResults: [],
      recipes: {},
      searchCache: {},
      searchCacheRoster: new Set(),
    }
  }

  /* -------------------- Authentication/Account -------------------- */
  
  setAppState = next => this.setState(next => ({ ...next }))
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
      -------------- Automatically unBinds @unmount ------------  */

  componentDidMount() {
    this.dbSync('drinks')
    this.dbSync('recipes')
    this.dbSync('ingredients')
    this.dbSync('glasses')
    this.dbSync('categories')
    this.dbSync('searchCache')
  }

  render() {
    const ctx = {
      ...this.state,
      setUserState: this.setUserState,
      setAppState: this.setAppState,
    }
    return (
      <AppContext.Provider value={ctx}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </AppContext.Provider>
    )
  }
}

export default App
