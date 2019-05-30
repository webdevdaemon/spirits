/**
* @augments {Component<{  object:object,  entries:arrayOfarrayOfstring)),>}
*/
import PropTypes from 'prop-types'
import React from 'react'

const TableFrom = ({entries}) => {

  return (
    <div className="table-from">
      {entries.length ? (
        entries.map(([key, value], i) => (
          <div className="entry" key={key + i}>
            <span className="key">{key + ':'}</span>
            <span className="value">{/\w/.test(value) ? value : '1 part'}</span>
          </div>
        ))
      ) : (
        <h3>{'No Data To Organize...'}</h3>
      )}
    </div>
  )
}

TableFrom.propTypes = {
  entries: PropTypes.array,
}

TableFrom.defaultProps = {
  entries: null,
}

export default TableFrom
