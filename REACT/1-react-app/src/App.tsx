import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  // const list: string[] = [];
  const list = ["Knight", "Hornet", "Pure Vessel", "Final Bright"];

  //Primera Funcion
  const handleSelect1 = (elemento: string) => {
    console.log("IMPRIMIENDO", elemento);
  };

  //Segunda Funcion
  // const handleSelect2 = (elemento: string) => {
  //   console.log("MOSTRANDO", elemento);
  // };

  //Condicional externo que nos puede mostrar la cantidad de elementos en la lista con operador ternario, asi ya no tenemos que volver a crear los elementos dentro del return

  return (
    <Card>
      {/* 
        Si la longitud de la lista es diferente de cero, el mensaje se muestra,
        en caso contrario no se muestra absolutamente nada, ni siquiera el cero
      */}
      {/* {list.length !== 0 && "Mi Lista"} */}
      <CardBody
        title="CHILDREN"
        text="Children is used for item creation without repeat code"
      />
      {list.length ? (
        <List data={list} onSelect={handleSelect1} />
      ) : (
        "La lista no tiene elementos para mostrar"
      )}
      {/* <List data={list} onSelect={handleSelect1} /> */}
      {/* <List data={list} onSelect={handleSelect2} /> */}
    </Card>
  );
}

export default App;
