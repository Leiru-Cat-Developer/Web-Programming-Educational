import { useState } from "react";

const TURNS = {
  X: "X",
  O: "O",
};

//INIT CUADRADOS DEL TABLERO
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  //FUNCION OYENTE PARA ACTUALIZAR EL TABLERO SOLO CUANDO SE DA CLICK
  const handleClick = () => {
    updateBoard();
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  //INIT TABLERO
  const [board, setBoard] = useState(Array(9).fill(null));

  //INIT TURNOS
  const [turn, setTurn] = useState(TURNS.X);

  //UPDATE TABLERO
  const updateBoard = () => {
    //CAMBIAR VALOR DEL TURNO
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  return (
    <main className="board">
      <h1>TIC TAC TOE</h1>

      {/* TABLERO GENERAL */}
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            ></Square>
          );
        })}
      </section>

      {/* SECCION QUE MUESTRA DE QUIE ES EL TURNO */}
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
