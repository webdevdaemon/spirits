import React from 'react'
import {DropdownList} from 'react-widgets'
import {MEASUREMENT_UNITS} from '../../../utils/finite-values'
import Styled from './AddForm.styled'

const AmountInput = ({count, unit, handleChange}) => (
  <>
    <div className="left">
      <input
        onChange={e => handleChange(e.target.value, 1)}
        className="input"
        type="number"
        value={count}
        max={20}
        min={1}
      />
    </div>
    <div className="right">
      <div className="select">
        <select
          onChange={e => handleChange(e.target.value, 2)}
          // className=""
          value={unit}>
          {MEASUREMENT_UNITS.map((str, i) => (
            <option key={i}>{str}</option>
          ))}
        </select>
      </div>
    </div>
  </>
)

const SubmitButton = ({text, handleSubmit}) => (
  <button
    onClick={handleSubmit}
    onSubmit={handleSubmit}
    className="button is-success">
    {`${text}`}
  </button>
)

const RemoveButton = ({handleRemove}) => (
  <div className="is-vcentered">
    <button className="delete is-large" onClick={handleRemove} />
  </div>
)
const ListItem = item => (
  <Styled.ListItem>
    <p>{item.name}</p>
  </Styled.ListItem>
)

const DropdownListComponent = ({data = [], children}) => {
  return <Styled.ListComponent data={data}>{children}</Styled.ListComponent>
}

const Ingredients = {
  SavedList: ({saved, handleRemove}) => {
    return (
      <Styled.SavedIngredientsList>
        {saved.length ? (
          saved.map(([name, count, unit], i) => (
            <Styled.IngredientSaved
              className="notification is-grey is-flex columns"
              key={i}>
              <div className="column is-8 has-text-left">
                <p className="is-size-5 has-text-weight-bold">{`${name}`}</p>
              </div>
              <div className="column is-flex">
                <p className="has-text-left">{`${count}`}</p>
                <p className="has-text-right">{`${unit}`}</p>
              </div>
              <RemoveButton handleRemove={e => handleRemove(name)} />
            </Styled.IngredientSaved>
          ))
        ) : (
          <div />
        )}
      </Styled.SavedIngredientsList>
    )
  },

  /* ------------------------------------------------- */

  InputGroup: ({data, values, handleChange, handleSubmit, handleCreate}) => {
    const [name, count, unit] = values
    return (
      <div className="field has-addons ingredient-input">
        <div className="control is-expanded">
          <DropdownList
            onSelect={({name}) => handleChange(name, 0)}
            onChange={({name}) => handleChange(name, 0)}
            onCreate={value => handleCreate(value)}
            placeholder="List Ingredients..."
            containerClassName={`input`}
            filter="contains"
            textField="name"
            groupBy="char"
            value={name}
            data={data}
            allowCreate
            autoFocus
            suggest
          />
        </div>
        <div className="control multi">
          <AmountInput handleChange={handleChange} count={count} unit={unit} />
        </div>
        <div className="control">
          <SubmitButton text="save" handleSubmit={handleSubmit} />
        </div>
      </div>
    )
  },
}

export default Ingredients
