import React from 'react'
import {DropdownList} from 'react-widgets'
import {AmountInput} from './AmountInput'
import {DropdownListComponent} from './DropdownListComponent'
import {SubmitButton} from './SubmitButton'

export const InputGroup = ({
  handleChange,
  handleSubmit,
  handleCreate,
  formik,
  values,
  data,
}) => {
  const {name, count, unit} = values

  return (
    <div className="field has-addons ingredient-input">
      <div className="control is-expanded">
        <DropdownList
          onSelect={({name}) => handleChange(name, 0)}
          onChange={({name}) => handleChange(name, 0)}
          onCreate={value => handleCreate(value)}
          listComponent={DropdownListComponent}
          placeholder="List Ingredients..."
          containerClassName={`input`}
          filter="contains"
          textField="name"
          groupBy="char"
          value={name}
          data={data}
          name="name"
          id="name"
          suggest
          autoFocus
          allowCreate
        />
      </div>
      <div className="control multi">
        <AmountInput
          handleChange={handleChange}
          count={count}
          unit={unit}
        />
      </div>
      <div className="control">
        <SubmitButton text="save" handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}
