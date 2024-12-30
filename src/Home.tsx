import React, { useState } from 'react';

interface HomeProps {
  onStart: (numQuestions: number) => void; // Callback to start the quiz
  totalQuestions: number; // Total available questions
}

const Home: React.FC<HomeProps> = ({ onStart, totalQuestions }) => {
  const [numQuestions, setNumQuestions] = useState<number | ''>('');

  const handleStartQuiz = () => {
    const validNumber = typeof numQuestions === 'number' && numQuestions > 0 && numQuestions <= totalQuestions;
    if (validNumber) {
      onStart(numQuestions);
    } else {
      alert(`Please enter a number between 1 and ${totalQuestions}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white flex flex-col items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold">Microsoft Certified: Azure Solutions Architect Quiz</h1>
        <p className="text-xl">Test your AZ-305 knowledge with this quiz!</p>
        <div className="space-y-4">
          <label htmlFor="numQuestions" className="block text-lg font-semibold">
            Enter Number of Questions (1-{totalQuestions}):
          </label>
          <input
            id="numQuestions"
            type="number"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg w-24 text-center"
            value={numQuestions}
            onChange={(e) => setNumQuestions(Number(e.target.value) || '')}
          />
        </div>
        <button
          onClick={handleStartQuiz}
          className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
