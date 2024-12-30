import React, { useState } from 'react';
import Home from './Home';
import QuestionsPage from './QuestionsPage';
import Results from './Results';
import questions from './questions'; // Import questions array

const App: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState<any[]>([]);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number[] }>({});

  const startQuiz = (numQuestions: number) => {
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    const chosenQuestions = shuffledQuestions.slice(0, numQuestions);
    setSelectedQuestions(chosenQuestions);
    setQuizStarted(true);
    setQuizFinished(false);
    setScore(0);
    setSelectedAnswers({}); // Reset selected answers
  };

  const finishQuiz = (finalScore: number, answers: { [key: number]: number[] }) => {
    setScore(finalScore);
    setSelectedAnswers(answers);
    setQuizFinished(true);
    setQuizStarted(false); // Ensure only one active state
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      {!quizStarted && !quizFinished ? (
        <Home onStart={startQuiz} totalQuestions={questions.length} />
      ) : quizStarted && !quizFinished ? (
        <QuestionsPage
          questions={selectedQuestions}
          onFinish={(finalScore, answers) => finishQuiz(finalScore, answers)}
        />
      ) : (
        <Results
          score={score}
          totalQuestions={selectedQuestions.length}
          selectedAnswers={selectedAnswers}
          questions={selectedQuestions}
          onReset={() => {
            setQuizStarted(false);
            setQuizFinished(false);
            setSelectedAnswers({});
          }}
        />
      )}
    </div>
  );
};

export default App;
