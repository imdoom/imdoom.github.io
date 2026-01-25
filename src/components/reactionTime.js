import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ReactionTime = () => {
  const [gameState, setGameState] = useState("waiting"); // waiting, ready, test, results
  const [reactionTime, setReactionTime] = useState(null);
  const [bestTime, setBestTime] = useState(
    localStorage.getItem("reactionTimeBest") || null,
  );
  const [startTime, setStartTime] = useState(null);
  const [message, setMessage] = useState("Click 'Start Test' when ready");

  const startTest = () => {
    setGameState("ready");
    setMessage("Wait for the green light...");
    setReactionTime(null);

    const delay = Math.random() * 3000 + 1000; // 1-4 seconds
    setTimeout(() => {
      setGameState("test");
      setMessage("CLICK NOW!");
      setStartTime(Date.now());
    }, delay);
  };

  const recordClick = () => {
    if (gameState === "test" && startTime) {
      const time = Date.now() - startTime;
      setReactionTime(time);
      setGameState("results");
      setMessage(`Your reaction time: ${time}ms`);

      if (!bestTime || time < parseInt(bestTime)) {
        setBestTime(time);
        localStorage.setItem("reactionTimeBest", time);
      }
    } else if (gameState === "ready") {
      setGameState("waiting");
      setMessage("Too fast! Wait for the green light. Try again.");
    }
  };

  const reset = () => {
    setGameState("waiting");
    setReactionTime(null);
    setStartTime(null);
    setMessage("Click 'Start Test' when ready");
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-md mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold">Reaction Time</h1>
          <Link to="/">
            <button className="bg-indigo-600 text-white px-3 py-1 rounded">
              Home
            </button>
          </Link>
        </header>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div
            className={`h-32 rounded-lg mb-6 flex items-center justify-center text-2xl font-bold transition-colors ${
              gameState === "test"
                ? "bg-green-500"
                : gameState === "ready"
                  ? "bg-yellow-500"
                  : "bg-gray-300 dark:bg-gray-700"
            }`}
          >
            {gameState === "test" && "🟢"}
            {gameState === "ready" && "🟡"}
            {gameState === "waiting" && "🔴"}
          </div>

          <p className="text-center text-lg mb-4 h-8">{message}</p>

          {bestTime && (
            <p className="text-center text-sm text-green-600 dark:text-green-400 mb-4">
              Best Time: {bestTime}ms
            </p>
          )}

          {gameState === "waiting" && (
            <button
              onClick={startTest}
              className="w-full bg-cyan-500 text-white py-3 rounded font-bold hover:bg-cyan-600"
            >
              Start Test
            </button>
          )}

          {(gameState === "ready" || gameState === "test") && (
            <button
              onClick={recordClick}
              className={`w-full py-3 rounded font-bold text-white ${
                gameState === "test"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-400"
              }`}
            >
              CLICK HERE
            </button>
          )}

          {gameState === "results" && (
            <button
              onClick={reset}
              className="w-full bg-indigo-500 text-white py-3 rounded font-bold hover:bg-indigo-600"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReactionTime;
