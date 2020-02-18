import React, {useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Footer, Header, View} from './Components/Layout'
import CTX from './context'
import {app as a, auth as u, db as d} from './firebase'
import PageRouter from './PageRouter'
import {INGREDIENTS} from './utils/db/schemas'
import {itemize} from './utils/helpers'

const App = () => {
  const [db, setDb] = useState({...d})
  const [app, setApp] = useState({...a})
  const [user, setUser] = useState({...u})
  const [tags, setTags] = useState({})
  const [glasses, setGlasses] = useState({})
  const [recipes, setRecipes] = useState({})
  const [categories, setCategories] = useState({})
  const [ingredients, setIngredients] = useState(INGREDIENTS)
  const [searchCache, setSearchCache] = useState({})

  const handleCreateIngredient = ingredientName => {
    const char = itemize(ingredientName)
    setIngredients(
      prevIngredients => {
        console.time('updateIngredients')
        return prevIngredients.concat([{ingredientName, char}])
      }
    )
  }

  const ctx = {db, app, handleCreateIngredient, ingredients}

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
