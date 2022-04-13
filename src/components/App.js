import "../styles/App.css";
import Input from "../components/Input";

function App() {
  return <Input />;
}

function getTree() {
  var input = document.getElementById("userInput").value;
  alert(input);
}

export default App;
