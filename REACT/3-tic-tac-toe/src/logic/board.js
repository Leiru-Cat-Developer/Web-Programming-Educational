import { WINNER_COMBOS } from "../constants";

//CHECAR GANADOR
export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a];
        }
    }
    return null; //EN CASO NO HAY GANADOR
};

//CHECK ENDGAME SI ES QUE HAY EMPATE
export const checkEndGame = (newBoard) => {
    //SI TODAS LAS POCISIONES SON DIFERENTES DE NULL, EL TABLERO ESTA LLENO Y RETORNA TRUE
    return newBoard.every((Square) => Square != null);
};