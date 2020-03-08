import React, {useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Footer, Header, View} from './Components/Layout'
import CTX from './context'
import {app as _app, auth as _auth, db as _db} from './firebase'
import PageRouter from './PageRouter'
import {INGREDIENTS} from './utils/db/schemas'
import {itemize} from './utils/helpers'

const App = () => {
  const [db, setDb] = useState(_db)
  const [app, setApp] = useState(_app)
  const [user, setUser] = useState(_auth)
  const [tags, setTags] = useState({})
  const [glasses, setGlasses] = useState({})
  const [recipes, setRecipes] = useState({})
  const [categories, setCategories] = useState({})
  const [ingredients, setIngredients] = useState(INGREDIENTS)
  const [searchCache, setSearchCache] = useState({})
  
  const handleCreateIngredient = name => {
    _db.collection('ingredients')
    .add({name, char: itemize(name)})
    .then(() => console.log("Document successfully written!"))
    .catch((error) => console.error("Error writing document: ", error))
  }

  const ctx = {
    db,
    setDb,
    app,
    setApp,
    user,
    setUser,
    tags,
    setTags,
    glasses,
    setGlasses,
    recipes,
    setRecipes,
    categories,
    setCategories,
    ingredients,
    setIngredients,
    searchCache,
    setSearchCache,
    handleCreateIngredient,
  }

  return (
    <BrowserRouter>
      <CTX.Provider value={ctx}>
        <View>
          <Header/>
          <PageRouter/>
          <Footer/>
        </View>
      </CTX.Provider>
    </BrowserRouter>
  )
}

export default App
