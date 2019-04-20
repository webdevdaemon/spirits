import React, {useState, useEffect, useContext, createContext, Children, cloneElement} from 'react'

const Context = createContext()
const ScrollY = Object.create(null)

ScrollY.Setter = ({children}) => {
  const [y, setY] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(false)

  const updateDirection = dir => {
    setIsScrollingDown(dir > 0)
    setIsScrollingUp(dir < 0)
    setDirection(dir)
  }

  const handleScroll = () => {
    const val = window.scrollY,
      newDirection = Math.sign(y - val)
    if (newDirection === direction) {
      return // Same Direction? EJECT!
    } else {
      setY(val) // Mark position @ direction change
      updateDirection(direction) // update direction value & bools
      console.log({y, direction})
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [y])

  return (
    <Context.Provider value={{y, direction, isScrollingDown, isScrollingUp}}>
      {children}
    </Context.Provider>
  )
}

ScrollY.Getter = ({children, ...props}) => {
  const scrollProps = useContext(Context)
  return <>{Children.map(children, child => cloneElement(child, {...props, ...scrollProps}))}</>
}

export default ScrollY
