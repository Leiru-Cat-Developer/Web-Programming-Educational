// import { MouseEvent } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  const handleClick = (event: string) => {
    console.log(event);
  };
  return (
    <ul className="list-group">
      {/* Pasar el key es importante para que se asigne un identificador a cada dato del arreglo */}
      {data.map((elemento) => (
        <li
          onClick={() => handleClick(elemento)}
          key={elemento}
          className="list-group-item"
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
