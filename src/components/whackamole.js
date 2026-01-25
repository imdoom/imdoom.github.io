import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WhackAMole = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [activeMole, setActiveMole] = useState(null);
  const [bestScore, setBestScore] = useState(
    localStorage.getItem("whackAMoleBest") || 0,
  );

  useEffect(() => {
    let interval;
    if (gameActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && gameActive) {
      endGame();
    }
    return () => clearInterval(interval);
  }, [timeLeft, gameActive]);

  useEffect(() => {
    let interval;
    if (gameActive) {
      interval = setInterval(() => {
        setActiveMole(Math.floor(Math.random() * 9));
      }, 600);
    }
    return () => clearInterval(interval);
  }, [gameActive]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
  };

  const endGame = () => {
    setGameActive(false);
    if (score > parseInt(bestScore)) {
      setBestScore(score);
      localStorage.setItem("whackAMoleBest", score);
    }
  };

  const hitMole = (index) => {
    if (index === activeMole && gameActive) {
      setScore(score + 1);
      setActiveMole(null);
    }
  };

  const Mole = ({ index }) => (
    <button
      onClick={() => hitMole(index)}
      className={`w-20 h-20 rounded-full border-4 font-bold text-2xl transition-all ${
        index === activeMole
          ? "bg-red-500 border-red-600 scale-110"
          : "bg-gray-300 border-gray-400 dark:bg-gray-600 dark:border-gray-700"
      }`}
    >
      {index === activeMole ? "🔨" : "🐹"}
    </button>
  );

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-2xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold">Whack-a-Mole</h1>
          <Link to="/">
            <button className="bg-indigo-600 text-white px-3 py-1 rounded">
              Home
            </button>
          </Link>
        </header>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-2xl font-bold">Score: {score}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Best: {bestScore}
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">{timeLeft}s</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <Mole key={index} index={index} />
            ))}
          </div>

          {!gameActive ? (
            <button
              onClick={startGame}
              className="w-full bg-indigo-500 text-white py-3 rounded font-bold hover:bg-indigo-600 text-lg"
            >
              {score === 0 ? "Start Game" : "Play Again"}
            </button>
          ) : (
            <button
              onClick={endGame}
              className="w-full bg-red-500 text-white py-3 rounded font-bold hover:bg-red-600 text-lg"
            >
              End Game
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhackAMole;
