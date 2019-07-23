import React, {Children, cloneElement} from 'react'
import List from 'react-widgets/lib/List'

const AddPropsToChildren = ({children, ...props}) => (
  <>
    {Children.map(children, child =>
      cloneElement(child, {...props}),
    )}
  </>
)

class CustomList extends List {
  render() {
    return (
      <div className="custom-list">
        <AddPropsToChildren style={{
          maxHeight: '100vh',
          width: '100vw',
        }}>
          {super.render()}
        </AddPropsToChildren>
      </div>
    )
  }
}

export default CustomList