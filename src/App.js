import React, {Component} from 'react'

import {base} from './base'
import {itemize} from './utils/helpers'
import {BrowserRouter} from 'react-router-dom'

import CTX from './context'
import PageRouter from './PageRouter'
import View from './Components/Layout/View'
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: [],
      searchCache: {},
      categories: {},
      glasses: {},
      recipes: {},
      tags: {},
    }
  }

  setAppState = next => {
    this.setState(
      () => ({...next}),
      () => {
        console.log('GLOBAL APP STATE UPDATED:')
        console.log(next)
      },
    )
  }

  handleCreateIngredient = name => {
    const char = itemize(name)
    this.setState(
      ({ingredients}) => {
        console.time('updateIngredients')
        const copy = [...ingredients]
        copy.push({ name, char })
        return {ingredients: copy}
      },
      () => {
        console.log('updated')
        console.timeEnd('updateIngredients')
      },
    )
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
    this.dbSync('searchCache')
    this.dbSync('categories')
    this.dbSync('glasses')
    this.dbSync('recipes')
    this.dbSync('tags')
  }

  render() {
    const {setAppState, handleCreateIngredient} = this
    const ctx = {
      setAppState,
      handleCreateIngredient,
      ...this.state,
    }

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
