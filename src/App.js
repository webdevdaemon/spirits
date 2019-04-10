import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {base} from './base'

import CTX from './context'
import AuthPopup from './Components/AuthPopup'
import AppRoutes from './AppRoutes'

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
      <CTX.Provider value={ctx}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CTX.Provider>
    )
  }
}

export default App
