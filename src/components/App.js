import "../styles/App.css";
import Input from "../components/Input";
import DisplayTree from "./DisplayTree";

function App() {
  return (
    <>
      <div>
        <Input />
      </div>
      <div>
        <DisplayTree t="new Tree(3, [new Tree(2, [new Tree(5)]), new Tree(4)])" />
      </div>
    </>
  );
}

export default App;
