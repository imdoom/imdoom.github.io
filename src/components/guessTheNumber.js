import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GuessTheNumber = () => {
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 100) + 1,
  );
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("Guess a number between 1 and 100");
  const [gameOver, setGameOver] = useState(false);
  const [bestScore, setBestScore] = useState(
    localStorage.getItem("guessTheNumberBest") || null,
  );

  const handleGuess = () => {
    if (!guess) return;

    const num = parseInt(guess);
    setAttempts(attempts + 1);

    if (num < secretNumber) {
      setMessage("Too low! Try a higher number.");
    } else if (num > secretNumber) {
      setMessage("Too high! Try a lower number.");
    } else {
      setGameOver(true);
      const finalAttempts = attempts + 1;
      setMessage(`🎉 You got it in ${finalAttempts} attempts!`);

      if (!bestScore || finalAttempts < parseInt(bestScore)) {
        setBestScore(finalAttempts);
        localStorage.setItem("guessTheNumberBest", finalAttempts);
      }
    }
    setGuess("");
  };

  const handleReset = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setAttempts(0);
    setMessage("Guess a number between 1 and 100");
    setGameOver(false);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-md mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold">Guess the Number</h1>
          <Link to="/">
            <button className="bg-indigo-600 text-white px-3 py-1 rounded">
              Home
            </button>
          </Link>
        </header>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <p className="text-center text-lg mb-4">{message}</p>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
            Attempts: <span className="font-bold">{attempts}</span>
          </p>
          {bestScore && (
            <p className="text-center text-sm text-green-600 dark:text-green-400 mb-4">
              Best Score: {bestScore} attempts
            </p>
          )}

          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && !gameOver && handleGuess()}
            placeholder="Enter your guess"
            disabled={gameOver}
            className="w-full p-2 border border-gray-300 rounded mb-4 dark:bg-gray-700 dark:border-gray-600"
          />

          {!gameOver ? (
            <button
              onClick={handleGuess}
              className="w-full bg-orange-500 text-white py-2 rounded font-bold hover:bg-orange-600 mb-2"
            >
              Guess
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full bg-green-500 text-white py-2 rounded font-bold hover:bg-green-600"
            >
              Play Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuessTheNumber;
