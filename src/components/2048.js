import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Game2048 = () => {
  const [board, setBoard] = useState(initializeBoard());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    localStorage.getItem("2048Best") || 0,
  );
  const [gameOver, setGameOver] = useState(false);

  function initializeBoard() {
    const newBoard = Array(16).fill(0);
    addNewTile(newBoard);
    addNewTile(newBoard);
    return newBoard;
  }

  function addNewTile(grid) {
    const emptyIndex = grid
      .map((val, idx) => (val === 0 ? idx : null))
      .filter((val) => val !== null);
    if (emptyIndex.length > 0) {
      const randomIndex =
        emptyIndex[Math.floor(Math.random() * emptyIndex.length)];
      grid[randomIndex] = Math.random() < 0.9 ? 2 : 4;
    }
  }

  function moveLeft(grid) {
    const newGrid = grid.map((row, i) =>
      i % 4 === 0 ? grid.slice(i, i + 4) : null,
    );
    const merged = grid.map((_, i) => {
      if (i % 4 !== 0) return null;
      const row = grid.slice(i, i + 4).filter((val) => val !== 0);
      for (let j = 0; j < row.length - 1; j++) {
        if (row[j] === row[j + 1]) {
          row[j] *= 2;
          row.splice(j + 1, 1);
        }
      }
      return row.concat(Array(4 - row.length).fill(0));
    });

    const result = [];
    for (let i = 0; i < 4; i++) {
      result.push(...merged[i * 4]);
    }
    return result;
  }

  function handleKeyPress(e) {
    if (gameOver) return;

    let newBoard = [...board];
    let moved = false;

    if (e.key === "ArrowLeft") {
      const oldBoard = [...newBoard];
      newBoard = moveLeft(newBoard);
      moved = JSON.stringify(oldBoard) !== JSON.stringify(newBoard);
    }

    if (moved) {
      addNewTile(newBoard);
      setBoard(newBoard);
      setScore(
        score + newBoard.reduce((acc, val) => acc + (val > 4 ? val - 4 : 0), 0),
      );
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [board, gameOver]);

  const handleReset = () => {
    const newBoard = initializeBoard();
    setBoard(newBoard);
    setScore(0);
    setGameOver(false);
  };

  const Tile = ({ value }) => (
    <div
      className={`w-16 h-16 flex items-center justify-center font-bold text-white rounded ${
        value === 0
          ? "bg-gray-300 dark:bg-gray-700"
          : value === 2
            ? "bg-gray-400"
            : value === 4
              ? "bg-blue-300"
              : value === 8
                ? "bg-blue-500"
                : value === 16
                  ? "bg-blue-700"
                  : value === 32
                    ? "bg-orange-400"
                    : value === 64
                      ? "bg-orange-600"
                      : value === 128
                        ? "bg-yellow-400"
                        : value === 256
                          ? "bg-yellow-600"
                          : value === 512
                            ? "bg-red-400"
                            : value === 1024
                              ? "bg-red-600"
                              : "bg-purple-600"
      }`}
    >
      {value !== 0 ? value : ""}
    </div>
  );

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-md mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold">2048</h1>
          <Link to="/">
            <button className="bg-indigo-600 text-white px-3 py-1 rounded">
              Home
            </button>
          </Link>
        </header>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
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

          <div className="grid grid-cols-4 gap-2 mb-4 bg-gray-300 dark:bg-gray-700 p-2 rounded">
            {board.map((value, index) => (
              <Tile key={index} value={value} />
            ))}
          </div>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
            Use arrow keys to move tiles. Combine tiles with the same number!
          </p>

          <button
            onClick={handleReset}
            className="w-full bg-lime-500 text-white py-2 rounded font-bold hover:bg-lime-600"
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game2048;
