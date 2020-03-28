import React from 'react'
export const RemoveButton = ({handleRemove}) => (
  <div className="is-vcentered">
    <button className="delete is-large" onClick={handleRemove} />
  </div>
)
