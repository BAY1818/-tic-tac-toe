import { useState } from "react";
import Square from "./Square";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(board);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tic-Tac-Toe</h1>
      <p>{winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 70px)", justifyContent: "center" }}>
        {board.map((value, i) => (
          <Square key={i} value={value} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
      <button 
        onClick={resetGame} 
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
      >
        Reset Game
      </button>
    </div>
  );
}

// Check winner
function calculateWinner(squares) {
  const lines = [
    [0,1,2], [3,4,5], [6,7,8],  // rows
    [0,3,6], [1,4,7], [2,5,8],  // columns
    [0,4,8], [2,4,6]            // diagonals
  ];

  for (let [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
