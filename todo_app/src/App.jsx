import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const handleOnClick = (e)=>{
    console.log(task)
  }
 
  return (
    <>
      <h1 className='text-center text-4xl mt-6 text-white'>Welcome to Todo App</h1>
      <div className='text-center mt-6'> 
        <input className='bg-gray-500 rounded-sm p-1' value={task} placeholder='Enter your task' onChange={(e)=>setTask(e.target.value)} />
        <button className='bg-red-500 rounded-2xl p-1 ml-3 text-white' onClick={handleOnClick}> Add Task</button>
      </div>

    </>
  )
}

export default App
