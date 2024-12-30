import React from 'react';

interface ResultsProps {
  score: number;
  totalQuestions: number;
  selectedAnswers: { [key: number]: number[] };
  questions: Array<{
    questionText: string;
    type: 'single' | 'multiple';
    answerOptions: Array<{ answerText: string; isCorrect: boolean }>;
  }>;
  onReset: () => void;
}

const Results: React.FC<ResultsProps> = ({
  score,
  totalQuestions,
  selectedAnswers,
  questions,
  onReset,
}) => {
  console.log('Results Component Rendered'); // Debugging

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex items-center justify-center">
      <div className="bg-white text-black rounded-lg shadow-lg p-6 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-4">
          Your Score: {score} / {totalQuestions}
        </h1>
        <button
          onClick={onReset}
          className="block mx-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Retry Quiz
        </button>
        <div className="mt-6">
          {questions.map((question, index) => {
            const correctAnswers = question.answerOptions
              .map((option, i) => (option.isCorrect ? i : null))
              .filter((i) => i !== null);
            const userAnswers = selectedAnswers[index] || [];
            return (
              <div key={index} className="mb-4">
                <h2 className="text-lg font-semibold">
                  {index + 1}. {question.questionText}
                </h2>
                <p>
                  <strong>Your Answer:</strong>{' '}
                  {userAnswers.length > 0
                    ? userAnswers
                        .map((i) => question.answerOptions[i].answerText)
                        .join(', ')
                    : 'No Answer'}
                </p>
                <p>
                  <strong>Correct Answer:</strong>{' '}
                  {correctAnswers
                    .map((i) => question.answerOptions[i as number].answerText)
                    .join(', ')}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Results;