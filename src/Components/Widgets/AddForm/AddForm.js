import { useFormik } from 'formik'
import React, { useState } from 'react'
import { INGREDIENTS } from '../../../utils/finite-values.js'
import Styled from './AddForm.styled.js'
import { InputGroup, SavedList } from './Sections/Ingredients'

/*------------------------------------------------------------------*/

const AddForm = ({handleCreateIngredient}) => {
  
  const formik = useFormik({
    initialValues: {
      name: '',
      count: 1,
      unit: '',
    },
    onSubmit: values => {
      setSavedIngredients([...savedIngredients, values])
    },
  })
  
  const [savedIngredients, setSavedIngredients] = useState([{
      name: 'blah',
      count: 1,
      unit: 'part',
    },{
      name: 'halb',
      count: 2,
      unit: 'slice',
  }])

  const handleRemoveSavedIngredient = target => {
    setSavedIngredients(
      savedIngredients.filter(item => item[0] !== target),
    )
  }

  return (
    <>
      <h2 className="title">Add A Recipe</h2>
      <div>
        <section className="form-section">
          <h3 className="subtitle">Ingredients</h3>
          <SavedList
            saved={savedIngredients}
            handleRemove={handleRemoveSavedIngredient}
          />
          <Styled.Form onSubmit={formik.handleSubmit}>
            <InputGroup
              formik={formik}
              data={INGREDIENTS}
              saved={savedIngredients}
              values={formik.values}
              handleChange={formik.handleChange}
              handleRemove={handleRemoveSavedIngredient}
              handleSubmit={formik.handleSubmit}
              handleCreateIngredient={handleCreateIngredient}
            />
          </Styled.Form>
        </section>
      </div>
    </>
  )
}

export default AddForm
