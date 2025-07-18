import React, { useState } from 'react'
import '../css/Quiz.css'
import questions from '../questinBank'
function Quiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const current = questions[currentQ]

  const handleNextClicked = () => {

    if (currentQ === questions.length - 1) {
      setShowResult(true);
    }

    else {
      setCurrentQ(prev => prev + 1)
      setSelected(null)
    }

  }

  const handleScore = (op) => {
    if (op === current.answer) {
      setScore(prev => {
        const newScore = 1 + prev;
        console.log("Updated score:", newScore);
        return newScore;
      });
    }
  };

  if (showResult) {
    return (
      <div className="box">
        <h2>Quiz Completed ✅</h2>
        <hr />
        <h3>Your Score: {score} / {questions.length}</h3>
      </div>
    );
  }
  return (

    <div className='box'>
      <h2>Quiz 🎓</h2>
      <hr />

      <h3>{current.question}</h3>
      <ul>
        {current.options.map((op, index) => (
          <li
            key={index}
            className={` option ${selected === index ? 'selected' : ""}`}
            onClick={() => { setSelected(index); handleScore(op) }}>
            {op}
          </li>
        ))}
      </ul>
      <button onClick={handleNextClicked} disabled={selected===null}>Next</button>

      <div className='index'> {currentQ + 1} of {questions.length} questions

      </div>
    </div>


  )
}

export default Quiz
