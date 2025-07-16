import { useState } from 'react'
import './App.css'

function App() {
  
  const [input,setInput] = useState("")
  const handleOnClick = ()=>{
    console.log(input)
  }
  return (
    <>
    <div className=" text-center text-white">
      <h1 className="text-4xl mt-12 ">Welcome to Weather App </h1>
      <input className='bg-gray-500 mt-8 p-1 rounded-sm' value={input} onChange={(e)=>setInput(e.target.value)}  placeholder='Enter City name'/>
      <button className='bg-red-700 p-1 ml-3 rounded-sm' onClick={handleOnClick}>Search 🔍</button>
    </div>
    
      
    </>
  )
}

export default App
