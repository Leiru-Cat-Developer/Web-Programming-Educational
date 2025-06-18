import { useState } from "react";
import Card from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";

function App() {
  // CREAMOS NUESTRO ARREGLO QUE SE VA A ACTUALIZAR
  const [data, setData] = useState([
    "Hollow Knight",
    "Halo",
    "Tom Raider",
    "Outlast",
  ]);

  // CREAMOS LA FUNCION PARA AGREGAR MINIONS
  const addMinion = () => setData([...data, "Minion"]); // AGREGA AL FINAL DE TODO LOS DATOS

  // CREAMOS LA FUNCION PARA AGREGAR MINIONS
  const delMinion = () => setData(data.slice(0, -1)); // ELIMINA EL ULTIMO ELEMENTO

  return (
    <Card>
      <Button onClick={addMinion}>Agregar</Button>
      <Button onClick={delMinion}>Eliminar</Button>
      <List data={data} />
    </Card>
  );
}

export default App;
