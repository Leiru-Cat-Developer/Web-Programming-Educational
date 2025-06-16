// import { MouseEvent } from "react";

import { useState } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  const [index, setIndex] = useState(1);
  const handleClick = (i: number) => {
    setIndex(i);
  };
  return (
    <ul className="list-group">
      {/* Pasar el key es importante para que se asigne un identificador a cada dato del arreglo */}
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i)}
          key={elemento}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
