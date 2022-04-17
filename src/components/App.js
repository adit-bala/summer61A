import React, { useState } from "react";
import "../styles/App.css";
import Input from "../components/Input";
import DisplayTree from "./DisplayTree";

function App() {
  const [tree, setTree] = useState("");
  const [goal, setGoal] = useState(0);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <div>
        <Input setTree={setTree} setGoal={setGoal} setLoading={setLoading} />
      </div>
      {loading ? (
        <div>
          <DisplayTree tree={tree} goal={goal} />
        </div>
      ) : (
        <div className="background"></div>
      )}
    </div>  
    
  );
}

export default App;
