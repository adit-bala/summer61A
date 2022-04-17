import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DisplayTree from "./DisplayTree";
import "../styles/Input.css";

const Input = ({ setTree, setGoal, setLoading }) => {
  const { register, getValues } = useForm({});
  return (
    <div className="top-container">
      <div id="Title">Yield_Paths Visualizer</div>

      <form>
        <div className="combine">
          <div className="instructions">Enter Tree:</div>
          <div className="center">
            <input
              defaultValue="Tree(1, [Tree(2, [Tree(3), Tree(4, [Tree(6)]), Tree(5)]), Tree(5)])"
              {...register("tree", {
                required: true,
                pattern: /^Tree\s*\(\s*[0-9]\s*\,\s*(\[.*\])?\s*\)/i,
              })}
            />
          </div>
        </div>
        <div>
          <div className="combine">
            <div className="instructions">Enter Value:</div>
            <div className="center">
              <input
                defaultValue="5"
                {...register("value", { required: true, pattern: /^[0-9]+$/i })}
              />
            </div>
          </div>
        </div>
        <div className="center">
          <button
            type="button"
            onClick={() => {
              const trees = insertNew(getValues("tree"));
              const values = getValues("value");
              setTree(trees);
              setGoal(parseInt(values));
              setLoading(true);
              // add Display Tree
            }}
          >
            Get Values
          </button>
        </div>
      </form>
      <div></div>
    </div>
  );
};

function insertNew(treeString) {
  return treeString.replaceAll("Tree", "new Tree");
}

export default Input;
