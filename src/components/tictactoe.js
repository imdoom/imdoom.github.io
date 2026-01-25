import React, { useState } from "react";
import { Link } from "react-router-dom";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isBoardFull = board.every((square) => square !== null);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const Square = ({ value, onClick }) => (
    <button
      className="w-20 h-20 text-4xl font-bold border-2 border-gray-300 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      onClick={onClick}
    >
      {value}
    </button>
  );

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-md mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold">Tic Tac Toe</h1>
          <Link to="/">
            <button className="bg-indigo-600 text-white px-3 py-1 rounded">
              Home
            </button>
          </Link>
        </header>

        <div className="text-center mb-6">
          {winner ? (
            <p className="text-2xl font-bold text-green-500">
              Player {winner} Wins!
            </p>
          ) : isBoardFull ? (
            <p className="text-2xl font-bold text-yellow-500">It's a Draw!</p>
          ) : (
            <p className="text-xl">Player {isXNext ? "X" : "O"}'s Turn</p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6 justify-center">
          {board.map((value, index) => (
            <Square
              key={index}
              value={value}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

        <button
          onClick={handleReset}
          className="w-full bg-purple-500 text-white py-2 rounded font-bold hover:bg-purple-600"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
