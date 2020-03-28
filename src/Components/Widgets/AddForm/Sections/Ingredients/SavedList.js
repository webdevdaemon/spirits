import React from 'react'
import Styled from '../../AddForm.styled'
import {RemoveButton} from './RemoveButton'

export const SavedList = ({saved, handleRemove}) => {
  return (
    <Styled.SavedIngredientsList>
      {saved.length ? (
        saved.map(({name, count, unit}, i) => (
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
            <RemoveButton handleRemove={e => handleRemove(name)} />
          </Styled.IngredientSaved>
        ))
      ) : (
        <div />
      )}
    </Styled.SavedIngredientsList>
  )
}
