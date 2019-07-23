import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Styled from './AddForm.styled.js'
import Ingredients from './Ingredients.js'
import {FORM_UNITS} from '../../../utils/finite-values.js'

const AddForm = ({ingredients, handleCreateIngredient}) => {
  const [ingredientValues, setIngredientValues] = useState([
    '', 1, ''])
  const [savedIngredients, setSavedIngredients] = useState([
    ['liqourA', 1, 'part'],
    ['MixerB', 2, 'slice'],
    ['MixerC', 2, 'slice'],
    ['liquer', 2, 'slice'],
  ])
  const [errorMessages, setErrorMessages] = useState([])
  const [isValid, setIsValid] = useState(false)
  const [howTo, setHowTo] = useState('')
  
  const isValidSub = ([name, count, unit], saved) => {
    const savedNames = saved.map(([_name, ...z]) => _name)
    // Boolean conditions
    const isNotListed = savedNames.indexOf(name) < 0
    const isValidName = name.length > 1
    const isValidCount = count > 0
    const isValidUnit = FORM_UNITS.isValid(unit)
    // Iterate to Validate
    const validateArr = [
      [isNotListed, 'Ingredient Already in Use'],
      [isValidName, 'Please Enter a Valid Name'],
      [isValidCount, 'Please Enter a Valid Amount'],
      [isValidUnit, 'Please Select a Unit'],
    ]
    // if empty array, it is valid
    const isValid = validateArr.filter(([predicate, err]) => predicate).length
    return (
      isValid || setErrorMessages(
        validateArr.map(([bool, err]) => (bool ? null : err))
      )
    )
  }
  const handleChangeIngredient = (val, index) => {
    let arr = [...ingredientValues]
    arr[index] = val
    setIngredientValues(arr)
  }
  const handleSubmitIngredient = e => {
    e.persist()
    e.preventDefault()
    if (isValidSub(ingredientValues, savedIngredients)) {
      setSavedIngredients([...savedIngredients, ingredientValues,])
      setIngredientValues(['', 0, ''])
    } else {return }
  }
  const handleRemoveSavedIngredient = target => {
    setSavedIngredients(
      savedIngredients.filter(item => item[0] !== target),
    )
  }
  const handleHowtoInput = e => {
    console.log({e})
    setHowTo(e.target.value)
  }

  useEffect(() => {
    setIsValid(isValidSub(ingredientValues, savedIngredients))
    console.log('useEffect')
  }, [
    ingredientValues[0],
    ingredientValues[1],
    ingredientValues[2],
  ])

  return (
    <Styled.Form>
      <h2 className="title">Add A Recipe</h2>
      <Styled.Section>
        <h3 className="subtitle">Ingredients</h3>
        <Ingredients.SavedList
          saved={savedIngredients}
          handleRemove={handleRemoveSavedIngredient}
        />
        <Ingredients.InputGroup
          data={ingredients}
          values={ingredientValues}
          handleChange={handleChangeIngredient}
          handleSubmit={handleSubmitIngredient}
          handleCreate={handleCreateIngredient}
        />
        {
          isValid && errorMessages.map(str => (
            <p key={str} style={{color: 'red'}}>
              {str}
            </p>
          ))
        }
      </Styled.Section>
      <Styled.Section>
        <h3 className="subtitle">Mixing Instructions</h3>
        <Styled.HowToWrap>
          <Styled.HowTo>
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea is-medium"
                  onChange={handleHowtoInput}
                  placeholder={
                    `example: Step 1: Fill pint glass w/ ice.
                      Step 2: Pour ingredients into glass.
                      Step 3: Shake.
                      Step 4: Strain.`}
                  value={howTo}
                  columns={80}
                  rows={6}
                />
              </div>
            </div>
          </Styled.HowTo>
        </Styled.HowToWrap>
      </Styled.Section>
    </Styled.Form>
  )
}
AddForm.propTypes = {
  children: PropTypes.node,
}
export default AddForm
