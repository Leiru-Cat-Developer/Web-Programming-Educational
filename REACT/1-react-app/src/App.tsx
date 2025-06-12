import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Knight", "Hornet", "Pure Vessel", "Final Bright"];
  return (
    <Card>
      <CardBody
        title="CHILDREN"
        text="Children is used for item creation without repeat code"
      />
      <List data={list} />
    </Card>
  );
}

export default App;
