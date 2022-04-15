import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DisplayTree from "./DisplayTree";
import "../styles/Input.css";

const Input = () => {
  const [tree, setTree] = useState("");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { register, getValues } = useForm({});
  return (
    <div className="top-container">
      <form>
        <input
          defaultValue="Tree(6, [
            Tree(1, [Tree(11), Tree(2), Tree(3)]),
            Tree(10, [Tree(7), Tree(11), Tree(8)]),
            Tree(5, [Tree(0), Tree(4)]),
          ])"
          {...register("tree", {
            required: true,
            pattern: /^Tree\s*\(\s*[0-9]\s*\,\s*(\[.*\])?\s*\)/i,
          })}
        />
        <input
          defaultValue="11"
          {...register("value", { required: true, pattern: /^[0-9]+$/i })}
        />
        <button
          type="button"
          onClick={() => {
            const trees = insertNew(getValues("tree"));
            const values = getValues("value");
            setTree(trees);
            setCount(parseInt(values));
            setLoading(true);
            // add Display Tree
          }}
        >
          Get Values
        </button>
      </form>
      <div>
        {loading ? (
          <div>
            <DisplayTree tree={tree} goal={count} />
          </div>
        ) : (
          <div>
            <p></p>
          </div>
        )}
      </div>
    </div>
  );
};

function insertNew(treeString) {
  return treeString.replaceAll("Tree", "new Tree");
}

export default Input;
