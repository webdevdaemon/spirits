import React, {useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'
import View from './Components/Layout/View'
import CTX from './context'
import PageRouter from './PageRouter'
import {itemize} from './utils/helpers'

const App = () => {
  const [app, setApp] = useState(app)
  const [auth, setAuth] = useState(auth)
  const [db, setDb] = useState(db)
  const [tags, setTags] = useState({})
  const [glasses, setGlasses] = useState({})
  const [recipes, setRecipes] = useState({})
  const [categories, setCategories] = useState({})
  const [ingredients, setIngredients] = useState([])
  const [searchCache, setSearchCache] = useState({})

  //<//TODO//>//
  // => this...
  /* const db = {
    get: {tags, glasses, recipes, categories, ingredients, searchCache},
    set: {tags, glasses, recipes, categories, ingredients, searchCache},
  } */
  // => ...and this...
  /* const app = {
    tags, glasses, recipes, categories, ingredients, searchCache
  } */
  //>

  const ctx = {db, app}

  const handleCreateIngredient = name => {
    const char = itemize(name)
    setIngredients(
      prevIngredients => {
        console.time('updateIngredients')
        return prevIngredients.concat([{name, char}])
      },
      () => {
        console.log('inredient created: \n', {name, char})
        console.timeEnd('updateIngredients')
      },
    )
  }

  const ctx = {
    tags,
    glasses,
    recipes,
    categories,
    ingredients,
    searchCache,
    handleCreateIngredient,
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

export default App
