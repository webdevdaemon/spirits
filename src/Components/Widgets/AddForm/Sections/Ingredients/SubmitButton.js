import React from 'react'

export const SubmitButton = ({text, handleSubmit}) => (
  <button
    className="button is-success"
    onClick={handleSubmit}
    onSubmit={handleSubmit}
  >
    {`${text}`}
  </button>
)
