//STATE DEFAULT
import { useState } from "react";

//EXTERNAL LIBRARY
import confetti from "canvas-confetti"; //npm install canvas-confetti -E

//COMPONENTS
import { Square } from "./components/Square.jsx";
import { TURNS } from "./constants.js";
import { checkWinnerFrom, checkEndGame } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import {
  saveGameToStorage,
  resetGameToStorage,
} from "./logic/storage/index.js";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");

    //SI HAY ALGO EN STORAGE LO CARGA, SI NO, SET A DEFAULT VALUE
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  }); //INIT TABLERO

  const [turn, setTurn] = useState(() => {
    //SI HAY ALGO EN STORAGE LO CARGA, SI NO, SET A DEFAULT VALUE
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  }); //INIT TURNOS

  //INIT WINNERS [null = no hay ganador, false = hay un empate, true = gano alguien]
  const [winner, setWinner] = useState(null);

  //RESET GAME SI SE QUIERE RESET EN CUALQUIER MOMENTO
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameToStorage();
  };

  //UPDATE TABLERO
  const updateBoard = (index) => {
    //SI CADA SQUARE YA TIENE CONTENIDO YA NO DEJA HACER CLICK O SI YA HAY UN GANADOR
    if (board[index] || winner) return;

    //CAMBIAR VALOR DEL TURNO EN EL TABLERO
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //CAMBIAR VALOR DEL TURNO EN LA LOGICA
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveGameToStorage({ newBoard: newBoard, newTurn: newTurn });

    //EVALUAR SI HAY UN GANADOR
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti(); //ANIMATION
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>TIC TAC TOE</h1>

      <button onClick={resetGame}>Resetear el Juego</button>

      {/* TABLERO GENERAL */}
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      {/* SECCION QUE MUESTRA DE QUIE ES EL TURNO */}
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
