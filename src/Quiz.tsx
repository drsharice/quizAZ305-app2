import React, { useState } from 'react';

interface QuizProps {
  questions: Array<{
    questionText: string;
    type: 'single' | 'multiple';
    answerOptions: Array<{ answerText: string; isCorrect: boolean }>;
  }>;
  onQuizEnd: (score: number, selectedAnswers: any) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onQuizEnd }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<any>({});
  const [score, setScore] = useState(0);

  const handleAnswer = () => {
    const question = questions[currentQuestion];
    const userAnswers = selectedAnswers[currentQuestion] || [];
    const correctAnswers = question.answerOptions
      .map((option, index) => (option.isCorrect ? index : null))
      .filter((index) => index !== null);

    if (
      question.type === 'single' &&
      correctAnswers[0] === userAnswers[0]
    ) {
      setScore(score + 1);
    } else if (
      question.type === 'multiple' &&
      correctAnswers.length === userAnswers.length &&
      correctAnswers.every((val, index) => val === userAnswers[index])
    ) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      onQuizEnd(score, selectedAnswers);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white text-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">
          Question {currentQuestion + 1} / {questions.length}
        </h2>
        <p className="text-lg mb-6">{questions[currentQuestion].questionText}</p>
        <div className="space-y-3 mb-6">
          {questions[currentQuestion].answerOptions.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type={
                  questions[currentQuestion].type === 'single'
                    ? 'radio'
                    : 'checkbox'
                }
                id={`option-${index}`}
                name="answer"
                value={index}
                className="mr-3 h-5 w-5"
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  const answers =
                    questions[currentQuestion].type === 'single'
                      ? [value]
                      : [...(selectedAnswers[currentQuestion] || []), value];
                  setSelectedAnswers({
                    ...selectedAnswers,
                    [currentQuestion]: answers,
                  });
                }}
              />
              <label
                htmlFor={`option-${index}`}
                className="cursor-pointer text-lg"
              >
                {option.answerText}
              </label>
            </div>
          ))}
        </div>
        <button
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
          onClick={handleAnswer}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
