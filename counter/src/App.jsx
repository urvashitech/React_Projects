import { useState } from 'react'

import './App.css'

function App() {
  
  return (
    <>
      <h1 className='text-center text-white text-4xl mt-6 mb-6' >Hello & Welcome to counter</h1>
      <div className='text-white text-center'>
         <button className='bg-red-400 mr-2 p-2 rounded-3xl'>Decrease  − </button>
         {`Count Number`}
        <button className='bg-red-400 ml-2 p-2 rounded-3xl'>Increase +</button>
        
       
      </div>
    </>
  )
}

export default App
