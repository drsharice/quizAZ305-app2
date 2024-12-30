import React, { useState } from 'react';

interface QuestionsPageProps {
  questions: Array<{
    questionText: string;
    type: 'single' | 'multiple';
    answerOptions: Array<{ answerText: string; isCorrect: boolean }>;
  }>;
  onFinish: (finalScore: number, answers: { [key: number]: number[] }) => void; // Type for onFinish
}

const QuestionsPage: React.FC<QuestionsPageProps> = ({ questions, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number[] }>({});

  const handleAnswerChange = (answerIndex: number) => {
    const currentAnswers = selectedAnswers[currentQuestionIndex] || [];
    const question = questions[currentQuestionIndex];

    if (question.type === 'single') {
      // Single-choice question
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestionIndex]: [answerIndex],
      });
    } else {
      // Multiple-choice question
      const updatedAnswers = currentAnswers.includes(answerIndex)
        ? currentAnswers.filter((index) => index !== answerIndex)
        : [...currentAnswers, answerIndex];

      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestionIndex]: updatedAnswers,
      });
    }
  };

  const handleSubmit = () => {
    const question = questions[currentQuestionIndex];
    const correctAnswers = question.answerOptions
      .map((option, index) => (option.isCorrect ? index : null))
      .filter((index) => index !== null);
    const userAnswers = selectedAnswers[currentQuestionIndex] || [];

    // Check if user's answers match the correct answers
    if (
      correctAnswers.length === userAnswers.length &&
      correctAnswers.every((val, index) => val === userAnswers[index])
    ) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      onFinish(score + 1, selectedAnswers); // Send final score and answers to App
    }
  };

  const question = questions[currentQuestionIndex];
  const userAnswers = selectedAnswers[currentQuestionIndex] || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex items-center justify-center">
      <div className="bg-white text-black rounded-lg shadow-lg p-6 max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4">
          Question {currentQuestionIndex + 1} / {questions.length}
        </h2>
        <p className="mb-4">{question.questionText}</p>
        <div className="mb-4">
          {question.answerOptions.map((option, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type={question.type === 'single' ? 'radio' : 'checkbox'}
                id={`option-${index}`}
                name="answer"
                value={index}
                checked={userAnswers.includes(index)}
                onChange={() => handleAnswerChange(index)}
                className="mr-2"
              />
              <label htmlFor={`option-${index}`}>{option.answerText}</label>
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default QuestionsPage;
