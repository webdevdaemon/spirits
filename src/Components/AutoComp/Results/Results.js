/**
 * @augments {Component<{ results:any, >}
 */
import PropTypes from 'prop-types'
import React, {useState} from 'react'
import Item from '../../Item'
import Styled from './Results.styled'

const Results = ({results, emptyMessage}) => {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <Styled.List>
      {results ? (
        results.length ? (
          results.map((item, i) => (
            <Item
              clickHandler={(dex) => setActiveIndex(dex)}
              activeIndex={activeIndex}
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

Results.propTypes = {results: PropTypes.any}
Results.defaultProps = {results: null}

export default Results
