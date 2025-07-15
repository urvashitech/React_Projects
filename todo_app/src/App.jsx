import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center text-4xl'>Welcome to Todo App</h1>
    </>
  )
}

export default App
