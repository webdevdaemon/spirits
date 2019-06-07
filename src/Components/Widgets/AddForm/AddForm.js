import React, {useState} from 'react'
import Styled from './AddForm.styled.js'
import DropdownList from 'react-widgets/lib/DropdownList'
import {MEASUREMENT_UNITS} from '../../../utils/finite-values'

const AddForm = ({ingredients, handleCreateIngredient}) => {
  // const [ing, setIng] = useState(['', 0, ''])
  const [ing, setIng] = useState(['blah', 1, 'part'])
  // const [saved, setSaved] = useState([])
  const [saved, setSaved] = useState([
    ['blah', 1, 'part'],
    ['halb', 2, 'slice'],
  ])

  const handleIngredientChange = (val, index) => {
    let arr = [...ing]
    arr[index] = val
    setIng(arr)
  }

  const handleSubmitIngredient = e => {
    e.persist()
    e.preventDefault()
    if (ing[0].length && ing[1] > 0 && ing[2].length) {
      setSaved([...saved, ing])
      setIng(['', 0, ''])
    } else {
      if (!ing[0].length) return alert('Please enter a Name!')
      if (!ing[1] <= 0) return alert('Please enter an Amount!')
      if (!ing[2].length || !ing[2] === '-----')
        return alert('Please Select a Unit of Measurement')
    }
  }

  const handleRemove = target => {
    setSaved(saved.filter(item => item[0] !== target))
  }

  const renderSaved = () => (
    <ul>
      {saved.length ? (
        saved.map(([name, count, unit], i) => (
          <Styled.IngredientSaved
            key={i}
            className="notification is-grey is-flex columns"
          >
            <div className="column is-8 has-text-left">
              <p className="is-size-5 has-text-weight-bold	">{`${name}`}</p>
            </div>
            <div className="column is-flex">
              <p className="has-text-left">{`${count}`}</p>
              <p className="has-text-right">{`${unit}`}</p>
            </div>
            <div className="is-vcentered">
              <button
                className="delete is-1 is-large"
                onClick={e => {
                  e.persist()
                  e.preventDefault()
                  handleRemove(name)
                }}
              />
            </div>
          </Styled.IngredientSaved>
        ))
      ) : (
        <div />
      )}
    </ul>
  )

  const renderMeasurementInputGroup = ([count, unit]) => (
    <>
      <div className="column is-1">
        <input
          onChange={e => handleIngredientChange(e.target.value, 1)}
          className="input is-size-6"
          value={count}
          type="number"
          max={20}
          min={1}
        />
      </div>
      <div className="column is-3">
        <select
          onChange={e => handleIngredientChange(e.target.value, 2)}
          className="is-size-4"
          value={unit}
        >
          {MEASUREMENT_UNITS.map((str, i) => (
            <option key={i}>{str}</option>
          ))}
        </select>
      </div>
    </>
  )

  const renderIngredientInputGroup = ([name, count, unit]) => {
    return (
      <Styled.SubFormWrap>
        <h3 className="subtitle">Ingredients</h3>
        {saved.length ? renderSaved() : null}
        <Styled.SubForm
        // onSubmit={handleSubmitIngredient}
        >
          <div className="columns is-gapless">
            <div className="column is-8">
              <DropdownList
                onSelect={({name}) => handleIngredientChange(name, 0)}
                onChange={({name}) => handleIngredientChange(name, 0)}
                onCreate={value => handleCreateIngredient(value)}
                placeholder="List Ingredients..."
                containerClassName="is-size-5"
                data={ingredients}
                filter="contains"
                textField="name"
                groupBy="char"
                value={name}
                allowCreate
                autoFocus
                suggest
              />
            </div>
            {renderMeasurementInputGroup([count, unit])}
            <div className="column">
              <button
                onClick={handleSubmitIngredient}
                className="delete is-large ing-sub"
              />
            </div>
          </div>
        </Styled.SubForm>
      </Styled.SubFormWrap>
    )
  }

  return (
    <Styled.Form>
      <h2 className="title">Add A Recipe</h2>
      {renderIngredientInputGroup(ing)}
    </Styled.Form>
  )
}

export default AddForm
