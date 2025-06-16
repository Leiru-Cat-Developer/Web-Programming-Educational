import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Knight", "Hornet", "Pure Vessel", "Final Bright"];

  //Primera Funcion
  const handleSelect1 = (elemento: string) => {
    console.log("IMPRIMIENDO", elemento);
  };

  //Segunda Funcion
  const handleSelect2 = (elemento: string) => {
    console.log("MOSTRANDO", elemento);
  };

  return (
    <Card>
      <CardBody
        title="CHILDREN"
        text="Children is used for item creation without repeat code"
      />
      <List data={list} onSelect={handleSelect1} />
      <List data={list} onSelect={handleSelect2} />
    </Card>
  );
}

export default App;
