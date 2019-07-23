import React, {Children, cloneElement, useState} from 'react'
/**
 * imperatively injects HUD props (showHUD & toggleHUD) into it's children. Used as an invisible Layout wrapper for  Header, PageRouter, & Footer.
 */
const View = ({children}) => {
  const [showHUD, setShowHUD] = useState(true)
  const toggleHUD = () => setShowHUD(!showHUD)

  return (
    <div>
      {Children.map(children, child =>
        cloneElement(child, {showHUD, toggleHUD}),
      )}
    </div>
  )
}

export default View
