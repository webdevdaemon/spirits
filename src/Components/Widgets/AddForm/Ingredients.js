import React from 'react'
import {MEASUREMENT_UNITS} from '../../../utils/finite-values'
import {DropdownList} from 'react-widgets'
import Styled from './AddForm.styled'

const AmountInput = ({count, unit, handleChange}) => (
  <div className="columns is-mobile">
    <div className="column is-3">
      <input
        onChange={e => handleChange(e.target.value, 1)}
        className="input is-size-6"
        value={count}
        type="number"
        max={20}
        min={1}
      />
    </div>
    <div className="column is-9">
      <select
        onChange={e => handleChange(e.target.value, 2)}
        className="is-size-4"
        value={unit}
      >
        {MEASUREMENT_UNITS.map((str, i) => (
          <option key={i}>{str}</option>
        ))}
      </select>
    </div>
  </div>
)

const SubmitButton = ({handleSubmit}) => (
  <div className="column">
    <button
      onClick={handleSubmit}
      className="delete is-large ing-sub"
    />
  </div>
)

const RemoveButton = ({handleRemove}) => (
  <div className="is-vcentered">
    <button
      className="delete is-large"
      onClick={handleRemove}
    />
  </div>
)

const Ingredients = {
  SavedList(saved, handleRemove) {
    return (
      <Styled.SavedIngredientsList>
        {saved.length ? (
          saved.map(([name, count, unit], i) => (
            <Styled.IngredientSaved
              className="notification is-grey is-flex columns"
              key={i}
            >
              <div className="column is-8 has-text-left">
                <p className="is-size-5 has-text-weight-bold">
                  {`${name}`}
                </p>
              </div>
              <div className="column is-flex">
                <p className="has-text-left">{`${count}`}</p>
                <p className="has-text-right">{`${unit}`}</p>
              </div>
              <RemoveButton
                handleRemove={e => handleRemove(name)}
              />
            </Styled.IngredientSaved>
          ))
        ) : (
          <div />
        )}
      </Styled.SavedIngredientsList>
    )
  },

  /* ------------------------------------------------- */

  InputGroup({
    data,
    saved,
    values,
    handleChange,
    handleRemove,
    handleSubmit,
    handleCreate,
  }) {
    const [name, count, unit] = values

    return (
      <Styled.SubFormWrap>
        <h3 className="subtitle">Ingredients</h3>
        <Ingredients.SavedList
          saved={saved}
          handleRemove={handleRemove}
        />
        <Styled.SubForm>
          <div className="columns is-gapless is-mobile">
            <div className="column is-8">
              <DropdownList
                onSelect={({name}) => handleChange(name, 0)}
                onChange={({name}) => handleChange(name, 0)}
                onCreate={value => handleCreate(value)}
                placeholder="List Ingredients..."
                containerClassName="is-size-5"
                data={data}
                filter="contains"
                textField="name"
                groupBy="char"
                value={name}
                allowCreate
                autoFocus
                suggest
              />
            </div>
            <div className="column is-4">
              <AmountInput
                count={count}
                unit={unit}
                handleChange={handleChange}
              />
            </div>
            <SubmitButton handleSubmit={handleSubmit} />
          </div>
        </Styled.SubForm>
      </Styled.SubFormWrap>
    )
  },
}

export default Ingredients
