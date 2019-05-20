/**
* @augments {Component<{  object:object,  entries:arrayOfarrayOfstring)),>}
*/
import PropTypes from 'prop-types'
import React from 'react'

const TableFrom = ({ entries }) => {

  return (
    <div
      className="table-from-object"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignTableFroms: 'stretch',
        justifyContent: 'flex-start',
        width: '100%',
      }}
    >
      {entries.length ? (
        entries.map(([key, value], i) => (
          <div key={key+i} style={{display: 'flex', justifyContent: 'space-between'}}>
            <span style={{width: '50%', textAlign: 'left'}}>{key + ':'}</span>
            <span style={{width: '50%', textAlign: 'right'}}>{value}</span>
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
  entries: null
}

export default TableFrom
