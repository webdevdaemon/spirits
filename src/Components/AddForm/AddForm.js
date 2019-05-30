import React, { useState } from 'react'
import Multiselect from 'react-widgets/lib/Multiselect'

const AddForm = props => {
  let data = []
  const alphabet = Object.keys(props.ingredients)
  alphabet.forEach(char => {
    const byChar = Object.keys(props.ingredients[`${char}`])
      .map(name => ({name, char}))
    data = [...data, ...byChar]
  })
  console.log(alphabet, data)

  return (
    <>
      <h2>Add A Recipe</h2>
      <form>
        <label>Included Ingredients</label>
        <Multiselect
          autoFocus
          allowCreate
          textField="name"
          data={data}
          groupBy="char"
        />
      </form>
    </>
  )
}

export default AddForm