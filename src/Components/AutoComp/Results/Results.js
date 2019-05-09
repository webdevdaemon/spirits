import React from 'react'
import Styled from './Results.styled'

const Item = ({item}) => {
  return (
    <Styled.Item imgUrl={item.imgUrl}>
      <p>{item.name}</p>
    </Styled.Item>
  )
}

const Results = ({results}) => {
  return (
    <ul>
      {results.length > 1 ? (
        results.map((item, i) => <Item item={item} key={i} />)
      ) : (
        <h3>{'LOADING'}</h3>
      )}
    </ul>
  )
}

export default Results
