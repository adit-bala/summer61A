import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DisplayTree from "./DisplayTree";
import "../styles/Input.css";

const Input = () => {
  const [tree, setTree] = useState("");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const { register, getValues } = useForm({});
  return (
    <div className="top-container">
      <form>
        <input
          defaultValue="new Tree(6, [
            new Tree(1, [new Tree(11), new Tree(2), new Tree(3)]),
            new Tree(10, [new Tree(7), new Tree(9), new Tree(8)]),
            new Tree(5, [new Tree(0), new Tree(4)]),
          ])"
          {...register("tree", { required: true, pattern: /^[A-Za-z]+$/i })}
        />
        <input
          defaultValue="11"
          {...register("value", { required: true, pattern: /^[0-9]+$/i })}
        />
        <button
          type="button"
          onClick={() => {
            const trees = getValues("tree");
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
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Input;
