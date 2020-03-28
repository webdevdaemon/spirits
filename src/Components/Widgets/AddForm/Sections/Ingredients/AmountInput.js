import React from 'react'
import {MEASUREMENT_UNITS} from '../../../../../utils/finite-values'

export const AmountInput = ({count, unit, handleChange}) => (
  <>
    <div className="left">
      <input
        id="count"
        name="count"
        onChange={handleChange}
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
          id="unit"
          name="unit"
          onChange={handleChange}
          value={unit}
        >
          {MEASUREMENT_UNITS.map((str, i) => (
            <option key={i}>{str}</option>
          ))}
        </select>
      </div>
    </div>
  </>
)
