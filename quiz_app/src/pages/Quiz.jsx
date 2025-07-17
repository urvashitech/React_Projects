import React, { useState } from 'react'
import questions from '../questinBank'
function Quiz() {
    const [currentQ , setCurrentQ] = useState(0)
    const current = questions[currentQ]
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
  <div className="text-center text-white">
    <h1 className="text-4xl ">Welcome to Quiz Page</h1>
    <p className="text-xl mb-4">{current.question}</p>

    <ul className="space-y-4">
      {current.options.map((opt, index) => (
        <li key={index} className="flex items-center justify-center space-x-2">
          <input
            type="radio"
            id={`option-${index}`}
            name="quiz-option"
            value={opt}
            className="accent-blue-600 w-5 h-5"
          />
          <label htmlFor={`option-${index}`} className="text-lg cursor-pointer">
            {opt}
          </label>
        </li>
      ))}
    </ul>
  </div>
</div>
  )
}

export default Quiz
