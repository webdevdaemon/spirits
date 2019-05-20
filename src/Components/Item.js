/**
 * @augments {Component<{  activeIndex:any,  item:any>}
 */
import PropTypes from 'prop-types'
import React from 'react'
import TableFrom from './TableFrom'


const Item = ({item, index, activeIndex, clickHandler}) => {
  const renderDetail = ({
    iba,
    name,
    glass,
    howTo,
    category,
    alcoholic,
    ingredients,
  }) => {
    return (
      <>
        <TableFrom entries={ingredients} />
        <TableFrom entries={[["Mixing Instructions", howTo]]} />
        <TableFrom entries={
          Object.entries({ alcoholic, category, iba, glass })} />
      </>
    )
  }

  return (
    <li
      className={`item${activeIndex === index ? " active" : ""}`}
      onClick={() => clickHandler(activeIndex !== index ? index : null)}
      style={{backgroundImage: `url(${item.thumbnail})`}}
    >
      <p>{item.name}</p>
      <div className="item-detail">
        {activeIndex === index ? renderDetail(item) : null}
      </div>
    </li>
  )
}

Item.propTypes = {
  activeIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]),
  item: PropTypes.any,
  clickHandler: PropTypes.func,
}

Item.defaultProps = {
  item: PropTypes.object.isRequired,
}

export default Item
