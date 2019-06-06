import { useState } from 'react'

export default () => {
  const [name, setName] = useState()
  const [count, setCount] = useState()
  const [unit, setUnit] = useState()

  return [
    [name, count, unit],
    [setName, setCount, setUnit],
  ]
}