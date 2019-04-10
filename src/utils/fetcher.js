import axios from 'axios'
import normalize from './normalizeDrinkObject'

// TODO: listByIngredient,  should be a multi-purpose getter by "tag name" that takes the [ ("cgi" flag), (tagString) ]

const fetcher = (function() {
  
    const listByIngredient = async (ingredient) => {
      const list = await axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(({ data }) => data)
        .then(({ drinks }) => drinks)
        .then(drinks => drinks.map(normalize.simple))
        .catch(err => new Error(err))
      return list
    }

    const drinkByID = async (id) => {
      const drink = await
        axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(({data}) => data)
        .then(({drinks}) => drinks[0])
        .then(drink => normalize(drink))
        .catch(err => new Error(err))
      return drink
    }

    return {listByIngredient, drinkByID}

  }
)()

export default fetcher
fetcher.listByIngredient('pineapple') // ?
fetcher.drinkByID(12158) // ?