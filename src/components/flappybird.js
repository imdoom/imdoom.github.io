import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FlappyBird = () => {
  const [birdY, setBirdY] = useState(250);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    localStorage.getItem("flappyBirdBest") || 0,
  );
  const [gameOver, setGameOver] = useState(false);

  const gravity = 0.5;
  const jump = -12;
  const containerHeight = 600;
  const birdSize = 30;

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = setInterval(() => {
      setBirdY((prev) => {
        let newY = prev + gravity;
        if (newY + birdSize > containerHeight) {
          endGame();
          return prev;
        }
        return newY;
      });
    }, 30);

    return () => clearInterval(gameLoop);
  }, [gameStarted, gameOver]);

  const handleClick = () => {
    if (!gameStarted) {
      setGameStarted(true);
      setGameOver(false);
      setScore(0);
      setBirdY(250);
    } else if (!gameOver) {
      setBirdY((prev) => Math.max(prev + jump, 0));
    }
  };

  const endGame = () => {
    setGameOver(true);
    setGameStarted(false);
    if (score > parseInt(bestScore)) {
      setBestScore(score);
      localStorage.setItem("flappyBirdBest", score);
    }
  };

  const handleReset = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setBirdY(250);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-2xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold">Flappy Bird</h1>
          <Link to="/">
            <button className="bg-indigo-600 text-white px-3 py-1 rounded">
              Home
            </button>
          </Link>
        </header>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Score</p>
              <p className="text-2xl font-bold">{score}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Best</p>
              <p className="text-2xl font-bold">{bestScore}</p>
            </div>
          </div>

          <div
            onClick={handleClick}
            className="relative w-full bg-blue-300 rounded overflow-hidden cursor-pointer"
            style={{ height: `${containerHeight}px` }}
          >
            {/* Bird */}
            <div
              className="absolute w-8 h-8 bg-yellow-400 rounded-full transition-none"
              style={{
                left: "50px",
                top: `${birdY}px`,
              }}
            >
              👾
            </div>

            {/* Ground */}
            <div className="absolute bottom-0 w-full h-12 bg-green-600"></div>

            {/* UI Text */}
            {!gameStarted && !gameOver && (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-2xl font-bold text-white">Click to Start</p>
              </div>
            )}

            {gameOver && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <p className="text-2xl font-bold text-white mb-4">Game Over!</p>
                <p className="text-xl text-white mb-4">Score: {score}</p>
              </div>
            )}
          </div>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
            Click or tap to make the bird jump!
          </p>

          {gameOver && (
            <button
              onClick={handleReset}
              className="w-full mt-4 bg-red-500 text-white py-2 rounded font-bold hover:bg-red-600"
            >
              Play Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlappyBird;
