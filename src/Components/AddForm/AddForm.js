import React, {useState} from 'react'
import DropdownList from 'react-widgets/lib/DropdownList'
import {MEASUREMENT_UNITS} from '../../utils/finite-values'
import Styled from './AddForm.styled.js'

const AddForm = ({ingredients, handleCreateIngredient}) => {
  const [ing, setIng] = useState(['',0,''])
  const [saved, setSaved] = useState([])

  const handleIngredientChange = (val, index) => {
    let arr = [...ing]
    arr[index] = val
    setIng(arr)
  }

  const handleSubmitIngredient = e => {
    e.persist()
    e.preventDefault()
    if ((ing[0], ing[1], ing[2])) {
      setSaved([...saved, ing])
      setIng(['',0,''])
    } else {
      if (!ing[0]) return alert('Please enter a Name!')
      if (!ing[1]) return alert('Please enter an Amount!')
      if (!ing[2]) return alert('Please Select a Unit of Measurement')
    }
  }

  const handleRemove = target => {
    setSaved(saved.filter(li => li[0] !== target))
  }

  const renderSaved = () => (
    <>
      {saved.length
        ? saved.map(([name, count, unit], i) => (
          <Styled.IngredientSaved key={i}>
            <div className="name-wrap">
              <p className="name">{`${name}`}</p>
            </div>
            <div className="info-wrap">
              <p className="count">{`${count}`}</p>
              <p className="unit">{`${unit}`}</p>
              <button
                className="remove"
                onClick={e => {
                  e.persist()
                  e.preventDefault()
                  handleRemove(name)
                }}
              >
                {'remove'}
              </button>
            </div>
          </Styled.IngredientSaved>
        ))
        : <div />
      }
    </>
  )

  const renderMeasurementInputGroup = ([count, unit]) => (
    <>
      <input
        className="count"
        min={1}
        max={20}
        onChange={e => handleIngredientChange(e.target.value, 1)}
        type="number"
        value={count}
      />
      <select
        defaultValue="part"
        onChange={e => handleIngredientChange(e.target.value, 2)}
        value={unit}
      >
        {
          MEASUREMENT_UNITS.map((str, i) => (
            <option key={i}>{str}</option>
          ))
        }
      </select>
    </>
  )

  const renderIngredientInputGroup = ([name, count, unit]) => {

    return (
      <Styled.SubFormWrap
        id="ingredient-fieldset"
        onSubmit={handleSubmitIngredient}
      >
        <h3 className="sub-form-header">Ingredients</h3>
        <Styled.SubForm>
        <div className="field">
          <DropdownList
            defaultValue=""
            value={name}
            suggest
            autoFocus
            allowCreate
            groupBy="char"
            textField="name"                                    
            filter="contains"
            data={ingredients}
            placeholder="List Ingredients..."
            onSelect={({name}) => handleIngredientChange(name, 0)}
            onCreate={value => handleCreateIngredient(value)}
            />
          {renderMeasurementInputGroup([count, unit])}
        </div>
        <input
          className="button is-success"
          form="ingredient-fieldset"
          type="submit"
          value="Save Ingredient"
          />
          </Styled.SubForm>
      </Styled.SubFormWrap>
    )
  }

  return (                                                                      
    <Styled.Form>
      <h2 className="form-title">Add A Recipe</h2>
      {renderSaved()}
      {renderIngredientInputGroup(ing)}
    </Styled.Form>
  )
}

export default AddForm
