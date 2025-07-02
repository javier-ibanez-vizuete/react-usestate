import { useState } from 'react'
import { SimpleCounter } from './components/SimpleCounter/SimpleCounter'

export const App =() => {
  const [count, setCount] = useState(0)

  return (
    <>
    <SimpleCounter/>
    </>
  )
}