import { useState } from 'react'
import './App.css'

function App() {
  
  const [input,setInput] = useState("")
  const handleOnClick = ()=>{
    fetchData(input)
    console.log(input)
  }
  const fetchData = async (state)=>{
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=82bc5f413c30e041f05cbc208f7fbdc4&units=metric`)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <div className=" text-center text-white">
      <h1 className="text-4xl mt-12 ">Welcome to Weather App 🌤️📡 </h1>
      <input className='bg-gray-500 mt-8 p-1 rounded-sm' value={input} onChange={(e)=>setInput(e.target.value)}  placeholder='Enter City name'/>
      <button className='bg-red-700 p-1 ml-3 rounded-sm' onClick={handleOnClick}>Search 🔍</button>
    </div>
    
      
    </>
  )
}

export default App
