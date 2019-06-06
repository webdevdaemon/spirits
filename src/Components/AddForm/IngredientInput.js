import React, {useState} from 'react'
import { MEASUREMENT_UNITS } from '../../utils/finite-values.js'
import {DropdownList} from 'react-widgets'

const IngredientInput = {
  Saved: ([name, count, unit]) => {
    return <div className="field" />
  },
  Active: ({data}) => {
    return (
      <div className="field">
        <DropdownList
          autoFocus
          allowCreate
          textField="name"
          data={data}
          groupBy="char"
          searchTerm=""
        />
        <input type="number" className="count" />
        <select>
          {MEASUREMENT_UNITS.map((str, i) => (
            <option key={i}>{str}</option>
          ))}
        </select>
      </div>
    )
  },
}

export default IngredientInput
