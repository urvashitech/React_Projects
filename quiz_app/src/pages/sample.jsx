import { useState } from "react"
import { useNavigate } from "react-router-dom"
import questions from "../data/questions"

function Quiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const navigate = useNavigate()
  const current = questions[currentQ]

  const handleOptionClick = (option) => {
    setSelected(option)
    if (option === current.correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1)
      setSelected(null)
    } else {
      setShowResult(true)
    }
  }

  return (
    <div className="text-white text-center mt-12 px-4">
      {showResult ? (
        <>
          <h1 className="text-3xl font-bold">Quiz Finished ✅</h1>
          <p className="text-xl mt-4">Your Score: {score} / {questions.length}</p>
          <button className="mt-6 bg-blue-600 px-4 py-2 rounded" onClick={() => navigate("/")}>Go Home</button>
        </>
      ) : (
        <>
          <h2 className="text-2xl mb-4">Question {currentQ + 1} of {questions.length}</h2>
          <p className="text-xl mb-6">{current.question}</p>
          <div className="flex flex-col gap-3 items-center">
            {current.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(opt)}
                className={`w-[250px] px-3 py-2 rounded ${
                  selected === opt
                    ? opt === current.correct
                      ? "bg-green-600"
                      : "bg-red-600"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                disabled={selected !== null}
              >
                {opt}
              </button>
            ))}
          </div>

          {selected && (
            <button className="mt-6 bg-blue-600 px-4 py-2 rounded" onClick={handleNext}>
              {currentQ + 1 === questions.length ? "Finish Quiz" : "Next"}
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default Quiz
