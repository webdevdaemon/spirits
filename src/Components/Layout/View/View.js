import React, {Children, cloneElement, useState} from 'react'

const View = ({children}) => {
  const [showHUD, setShowHUD] = useState(true)
  const toggleHUD = () => setShowHUD(!showHUD)

  return (
    <div>
      {Children.map(children, child => {
        const nuProps = child.props.scrollable
          ? {toggleHUD}
          : {isHidden: !showHUD}
        return cloneElement(child, nuProps)
      })}
    </div>
  )
}

export default View
