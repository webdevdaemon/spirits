import React, {Component} from 'react'
import {base} from './base'
import {BrowserRouter} from 'react-router-dom'

import CTX from './context'
import View from './Components/Layout/View'
import PageRouter from './PageRouter'
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'

const ALPHA_REGEX = '/[a-z]gi/'
const entriesize = str =>
  str[0].match(ALPHA_REGEX)
    ? str[0].toLowercase // alpha character
    : '_' // num or symbol

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: {},
      glasses: {},
      recipes: {},
      categories: {},
      ingredients: [],
      searchCache: {},
    }
  }

  setAppState = next => {
    this.setState(
      () => ({...next}),
      () => console.log('GLOBAL APP STATE UPDATED:\n\n', next),
    )
  }

  handleCreateIngredient = name => {
    const char = entriesize(name)
    this.setState(
      ({ingredients}) => {
        console.time('updateIngredients')
        ingredients = ingredients.concat([
          {name, char}
        ])
        return {ingredients}
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
    this.dbSync('tags')
    this.dbSync('ingredients')
    this.dbSync('glasses')
    this.dbSync('categories')
    this.dbSync('recipes')
    this.dbSync('searchCache')
  }

  render() {
    const {setAppState, handleCreateIngredient} = this
    const ctx = {setAppState, handleCreateIngredient, ...this.state}

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
