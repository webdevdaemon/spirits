import React, {useState} from 'react'
import Styled from './AddForm.styled.js'
import Ingredients from './Ingredients.js'

const AddForm = ({ingredients, handleCreateIngredient}) => {
  const [currentValues, setCurrentValues] = useState([
    'blah', 1, 'part'
  ])
  const [savedIngredients, setSavedIngredients] = useState([
    ['blah', 1, 'part' ],
    ['halb', 2, 'slice'],
  ])

  const handleIngredientChange = (val, index) => {
    let arr = [...currentValues]
    arr[index] = val
    setCurrentValues(arr)
  }

  const handleSubmitIngredient = e => {
    if (
      currentValues[0].length &&
      currentValues[1] > 0 &&
      currentValues[2].length
    ) {
      setSavedIngredients([
        ...savedIngredients,
        currentValues,
      ])
      setCurrentValues(['', 0, ''])
    } else {
      if (!currentValues[0].length)
        return alert('Please enter a Name!')
      if (!currentValues[1] <= 0)
        return alert('Please enter an Amount!')
      if (
        !currentValues[2].length ||
        !currentValues[2] === '-----'
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
          values={currentValues}
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
