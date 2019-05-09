import React, {Component} from 'react'
import {base} from './base'
import {BrowserRouter} from 'react-router-dom'

import CTX from './context'
import View from './Components/Layout/View'
import PageRouter from './PageRouter'
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'

import autoComp from './utils/searchModule'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      glasses: {},
      recipes: {},
      categories: {},
      ingredients: {},
      searchCache: {},
      searchResults: [],
      searchCacheRoster: undefined,
    }
  }

  setAppState = next => this.setState(next => ({...next}))
  toggleHUD = () => this.setState(st => ({showHUD: !st.showHUD}))
  handleSearch = query => {
    this.setState(() => ({searchResults: autoComp(query)}))
  }

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

  componentDidMount() {
    this.dbSync('ingredients')
    this.dbSync('glasses')
    this.dbSync('categories')
    this.dbSync('recipes')
    this.dbSync('searchCache')
  }

  render() {
    const {setAppState, toggleHUD, handleSearch} = this
    const cb = {setAppState, toggleHUD, handleSearch}
    const ctx = {cb, ...this.state}

    return (
      <BrowserRouter>
        <CTX.Provider value={ctx}>
          <View>
            <Header />
            <PageRouter />
            <Footer />
          </View>
        </CTX.Provider>
      </BrowserRouter>
    )
  }
}

export default App
