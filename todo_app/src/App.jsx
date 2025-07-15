import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [tasks , setTasks]  = useState([])

  const handleOnClick = (e)=>{
    setTasks([...tasks,input])
    setInput('')
  }
 
  return (
    <>
      <h1 className='text-center text-4xl mt-6 text-white'>Welcome to Todo App</h1>
      <div className='text-center mt-6'> 
        <input className='bg-gray-500 rounded-sm p-1' value={input} placeholder='Enter your input' onChange={(e)=>setInput(e.target.value)} />
        <button className='bg-red-500 rounded-2xl p-1 ml-3 text-white' onClick={handleOnClick}> Add input</button>
      </div>

      <div className='text-center text-white mt-8'>
      <h1 className='text-2xl '>Your Todo List are : </h1>
      <ul className=' mt-3'>
        {tasks.map((task,index)=>(
          <li className='list-disc list-inside' key={index}>{task}</li>
        ))}
      </ul>
      </div>

    </>
  )
}

export default App
