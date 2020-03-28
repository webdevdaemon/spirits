import React from 'react'
import Styled from '../../AddForm.styled'

export const ListItem = item => (
  <Styled.ListItem>
    <p>{item.name}</p>
  </Styled.ListItem>
)
