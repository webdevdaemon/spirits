import React, {Children, cloneElement, useState} from 'react'

const View = ({children}) => {
  const [showHUD, setShowHUD] = useState(true)
  const toggleHUD = () => setShowHUD(!showHUD)

  return (
    <>{Children.map(children, child => cloneElement(child, {showHUD}))}</>
  )

}

export default View

//- return (
//-   <>
//-     {Children.map(children, child => {
//-       const nuProps =
//-         child.displayName === 'PageRouter' ? {toggleHUD} : {showHUD}
//-       return cloneElement(child, nuProps)
//-     })}
//-   </>
//- )