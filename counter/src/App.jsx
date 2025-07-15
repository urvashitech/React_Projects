import { useState } from 'react'

import './App.css'

function App() {

  const [count , setCount] = useState(0)
  const handleOnDecrease = ()=>{
    if (count > 0) {
      setCount(prev=>prev-1)
    } else {
      alert("Number can't go on negative side")
    }
    
  }

  const handleOnIncrease = ()=>{
    if (count>=0) {
      setCount(prev=>prev+1)
    } else {
      alert("Number can't go on negative side")
    }
    
  }
  return (
    <>
      <h1 className='text-center text-white text-4xl mt-6 mb-6' >Hello & Welcome to counter</h1>
      <div className='text-white text-center'>
         <button className='bg-red-400 mr-2 p-2 rounded-3xl' onClick={handleOnDecrease}>Decrease  − </button>
         {`Count Number is ${count}`}
        <button className='bg-red-400 ml-2 p-2 rounded-3xl' onClick={handleOnIncrease}>Increase +</button>
        
       
      </div>
    </>
  )
}

export default App
