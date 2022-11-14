import React from "react";
import { useState } from "react";
import Square from "../Square/Square";
import "./Board.css";

const Board = () => {
  const [data, setData] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      let [a, b, c] = logic;
      if (data[a] !== null && data[a] === data[b] && data[a] === data[c]) {
        return data[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (data[index] !== null) {
      return;
    }
    const newData = [...data];
    newData[index] = isXturn ? "X" : "O";
    setData(newData);
    setIsXturn(!isXturn);
  };
  const handleReset = () => {
    setData(Array(9).fill(null));
  };

  return (
    <div>
      <div className="board_row">
        <Square onClick={() => handleClick(0)} value={data[0]} />
        <Square onClick={() => handleClick(1)} value={data[1]} />
        <Square onClick={() => handleClick(2)} value={data[2]} />
      </div>
      <div className="board_row">
        <Square onClick={() => handleClick(3)} value={data[3]} />
        <Square onClick={() => handleClick(4)} value={data[4]} />
        <Square onClick={() => handleClick(5)} value={data[5]} />
      </div>
      <div className="board_row">
        <Square onClick={() => handleClick(6)} value={data[6]} />
        <Square onClick={() => handleClick(7)} value={data[7]} />
        <Square onClick={() => handleClick(8)} value={data[8]} />
      </div>
      <div>
        {isWinner ? (
          <div className="board_row" style={{ marginTop: "1rem" }}>
            <span className="board_winner"> {isWinner} won the game </span>
            <button onClick={handleReset} className="board_btn">
              Play Again
            </button>
          </div>
        ) : (
          <div className="board_row" style={{ marginTop: "1rem" }}>
            <button onClick={handleReset} className="board_btn">
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
