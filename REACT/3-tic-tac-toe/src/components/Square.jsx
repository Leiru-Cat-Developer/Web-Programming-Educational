//INIT CUADRADOS DEL TABLERO
export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  //FUNCION OYENTE PARA ACTUALIZAR EL TABLERO SOLO CUANDO SE DA CLICK
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
