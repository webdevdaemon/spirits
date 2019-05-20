import React, {Children, cloneElement, useState} from 'react'

const View = ({children}) => {
  const [showHUD, setShowHUD] = useState(true)
  // const toggleHUD = () => setShowHUD(!showHUD)

  return (
    <>{Children.map(children, child => cloneElement(child, {showHUD}))}</>
  )

}

export default View