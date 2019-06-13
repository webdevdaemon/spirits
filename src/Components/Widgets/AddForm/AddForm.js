import React, {useState} from 'react'
import Styled from './AddForm.styled.js'
import Ingredients from './Ingredients.js'

const AddForm = ({ingredients, handleCreateIngredient}) => {
  // const [ing, setIng] = useState(['', 0, ''])
  const [ingredientValues, setIngredientValues] = useState([
    'blah', 1, 'part'
  ])
  // const [saved, setSaved] = useState([])
  const [savedIngredients, setSavedIngredients] = useState([
    ['blah', 1, 'part' ],
    ['halb', 2, 'slice'],
  ])

  const handleIngredientChange = (val, index) => {
    let arr = [...ingredientValues]
    arr[index] = val
    setIngredientValues(arr)
  }

  const handleSubmitIngredient = e => {
    if (
      ingredientValues[0].length &&
      ingredientValues[1] > 0 &&
      ingredientValues[2].length
    ) {
      setSavedIngredients([
        ...savedIngredients,
        ingredientValues,
      ])
      setIngredientValues(['', 0, ''])
    } else {
      if (!ingredientValues[0].length)
        return alert('Please enter a Name!')
      if (!ingredientValues[1] <= 0)
        return alert('Please enter an Amount!')
      if (
        !ingredientValues[2].length ||
        !ingredientValues[2] === '-----'
      )
        return alert('Please Select a Unit of Measurement')
    }
  }

  const handleRemoveSavedIngredient = target => {
    setSavedIngredients(
      savedIngredients.filter(item => item[0] !== target),
    )
  }

  return (
    <Styled.Form>
      <h2 className="title">Add A Recipe</h2>
      <Styled.SubFormWrap>
        <h3 className="subtitle">Ingredients</h3>
        <Ingredients.SavedList
          saved={savedIngredients}
          handleRemove={handleRemoveSavedIngredient}
        />
        <Ingredients.InputGroup
          data={ingredients}
          saved={savedIngredients}
          values={ingredientValues}
          handleChange={handleIngredientChange}
          handleRemove={handleRemoveSavedIngredient}
          handleSubmit={handleSubmitIngredient}
          handleCreate={handleCreateIngredient}
        />
      </Styled.SubFormWrap>
    </Styled.Form>
  )
}

export default AddForm
