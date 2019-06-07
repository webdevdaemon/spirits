/**
* @augments {Component<{results:any, emptyMessage:string>}
*/
import PropTypes from 'prop-types'
import React, {useState} from 'react'
import Item from '../../../Item'
import Styled from './Results.styled'

const Results = ({results, emptyMessage}) => {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <Styled.List>
      {results ? (
        results.length ? (
          results.map((item, i) => (
            <Item
              clickHandler={dex => setActiveIndex(dex)}
              isActive={activeIndex === i}
              index={i}
              item={item}
              key={i}
            />
          ))
        ) : (
          <h3>{emptyMessage}</h3>
        )
      ) : null}
    </Styled.List>
  )
}

Results.propTypes = {results: PropTypes.any, emptyMessage: PropTypes.string}
Results.defaultProps = {results: null, emptyMessage: ''}

export default Results
