import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Card(props: Props) {
  const { children } = props;
  return (
    <div className="card" style={{ width: 300 }}>
      <div className="card-body">{children}</div>
    </div>
  );
}

// Usamos props para agregar card-title y card-text
interface CardBodyProps {
  //! "?"El simbolo de pregunta hace que el parametro sea opcional
  title?: string;
  text?: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
