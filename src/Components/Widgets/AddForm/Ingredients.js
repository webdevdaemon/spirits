import React from 'react'
import Styled from './AddForm.styled'
import {DropdownList} from 'react-widgets'
import {ControlPlus} from '../../../icons'
import {FORM_UNITS} from '../../../utils/finite-values'

const SubmitButton = ({handleSubmit}) => (
  <button className="button is-success" onClick={handleSubmit}>
    <ControlPlus />
  </button>
)

const RemoveButton = ({handleRemove}) => (
  <div className="is-vcentered">
    <button className="delete is-large" onClick={handleRemove} />
  </div>
)

const Count = ({count, handleChange}) =>
  <div className="control">
    <input
      onChange={e => handleChange(e.target.value, 1)}
      placeholder="amount"
      className="input"
      type="number"
      value={count}
      max={12}
      min={1}
    />
  </div>

const Unit = ({unit, count, handleChange}) =>
  <div className="control">
    <span className="select">
      <select
        onChange={e => handleChange(e.target.value, 2)}
        value={unit}
      >
        {FORM_UNITS.selectOptions.map(
          ([single, plural], i) => (
            <option key={i}>{count < 2 ? single : plural}</option>
        ))}
      </select>
    </span>
  </div>

const Amount = ({count, unit, handleChange, handleSubmit}) => (
  <div className="field has-addons has-addons-right">
    <Count count={count} handleChange={handleChange}/>
    <Unit count={count} unit={unit} handleChange={handleChange}/>
    <p className="control is-flex">
      <SubmitButton handleSubmit={handleSubmit} />
    </p>
  </div>
)

const InputGroup = ({
  data, values, handleChange, handleSubmit, handleCreate}) => {
  const [name, count, unit] = values
  return (
    <Styled.SubForm>
      <DropdownList
        placeholder="choose ingredient"
        onSelect={({name}) => handleChange(name, 0)}
        onChange={({name}) => handleChange(name, 0)}
        onCreate={value => handleCreate(value)}
        filter="startsWith"
        textField="name"
        groupBy="char"
        value={name}
        data={data}
        allowCreate
      />
      <Amount
        count={count}
        unit={unit}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Styled.SubForm>
  )
}

const SavedIngredientInfo = ({name, count, unit}) => (
  <>
    <div className="column is-4 has-text-left">
      <p className="is-size-4 has-text-weight-bold">
        {`${name}`}
      </p>
    </div>
    <div className="column is-4 has-text-left">
      <span>{`${count}`}</span>
      <span>{` ${unit}`}</span>
    </div>
  </>
)

const SavedList = ({saved, handleRemove}) => {
  return (
    <Styled.SavedIngredientsList>
      {saved.length
        ? saved.map(([name, count, unit], i) => (
            <Styled.SavedIngredient
              className="columns notification"
              key={i}
            >
              <SavedIngredientInfo
                i={i}
                name={name}
                count={count}
                unit={unit}
              />
              <RemoveButton handleRemove={e => handleRemove(name)} />
            </Styled.SavedIngredient>
          ))
        : null
      }
    </Styled.SavedIngredientsList>
  )
}

export default {InputGroup, SavedList}
