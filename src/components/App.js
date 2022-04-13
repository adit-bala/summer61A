import "../styles/App.css";
import Input from "../components/Input";
import DisplayTree from "./DisplayTree";

function App() {
  return (
    <>
      <div>
        <Input />;
      </div>
      <div>
        <DisplayTree t="Tree(3, [Tree(2, [Tree(5)]), Tree(4)])" />
      </div>
    </>
  );
}

export default App;
