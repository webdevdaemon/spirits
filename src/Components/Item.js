
import PropTypes from 'prop-types'
import React from 'react'
import TableFrom from './TableFrom'

const Item = ({item, index, isActive, clickHandler}) => {
  const renderDetail = ({howTo, ingredients}) => {
    return (
      <>
        <TableFrom entries={ingredients} />
        <p className="how-to">{howTo}</p>
      </>
    )
  }

  return (
    <li
      className={`item${isActive ? " active" : ""}`}
      onClick={() => clickHandler(!isActive ? index : null)}
      style={{backgroundImage: `url(${item.thumbnail})`}}
    >
      <div className="content">
        <p>{item.name}</p>
        <div
          className="item-detail">
          {isActive ? renderDetail(item) : null}
        </div>
      </div>
    </li>
  )
}

Item.propTypes = {
  index: PropTypes.number,
  isActive: PropTypes.bool,
  item: PropTypes.object,
  clickHandler: PropTypes.func,
}

Item.defaultProps = {
  item: PropTypes.object.isRequired,
}

export default Item
