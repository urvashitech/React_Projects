import React, { useState } from 'react'
import '../css/Quiz.css'
import questions from '../questinBank'
function Quiz() {
    const [currentQ , setCurrentQ] = useState(0)
    const [selected, setSelected] = useState(null)
    const [score,setScore] = useState(0)
    const current = questions[currentQ]

    const handleNextClicked = ()=>{
      setCurrentQ(prev=>prev+1)
      setSelected(null)
    }
    const handleScore = (op)=>{
      
      if (op === current.answer) {
        setScore(prev=>prev+1)
        
      }
      
    }
  return (
   
   <div className='box'>
    <h2>Quiz 🎓</h2>
    <hr/>
    <h3>{current.question}</h3>
    <ul>
      {current.options.map((op,index)=>(
        <li
         key = {index} 
         className={` option ${selected === index ? 'selected':""}`} 
         onClick={()=>{setSelected(index); handleScore(op)}}>
          {op}
        </li>
      ))}
    </ul>
    <button onClick={handleNextClicked}>Next</button>

    <div className='index'> {currentQ+1} of {questions.length} questions

    </div>
   </div>
   
   
  )
}

export default Quiz
