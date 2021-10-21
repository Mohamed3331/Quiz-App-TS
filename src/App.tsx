import React, { useState } from 'react';
import { fetchQuizQuestions } from './API'
import { Difficulty } from './API';
import QuestionCard from './components/QuestionCard';
import { GlobalStyle, Wrapper } from './App.style';

const TOTAL_QUESTIONS = 10

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};


function App() {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<any[]>([])
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [number, setNumber] = useState(0)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)


  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM)

    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    const answer = e.currentTarget.value
    const correct = questions[number].correct_answer === answer

    if (correct) setScore(score + 1)

    const answerObject = {
      question: questions[number].question,
      correctAnswer: questions[number].correct_answer,
      answer,
      correct,
    }

    setUserAnswers((prev) => [...prev, answerObject])
  }

  const nextQuestion = () => {
    if (number + 1 === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(number + 1)
    }
  }

  return (
    <>
      <GlobalStyle/>
        <Wrapper>
          <h1>React Quiz App</h1>
          {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <button className="start" onClick={startTrivia}>
              Start
            </button>
          ) : null}
          {!gameOver && <p className="score">Score: {score}</p>}
          {loading && <p>Loading Questions...</p>}
          {!gameOver && !loading && (
            <QuestionCard
              questionNo={number + 1}
              totalQuestions={10}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers && userAnswers[number]}
              callback={checkAnswer}
            />
          )}
          {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          ) : null}
        </Wrapper>
    </>
  )
}
export default App;
