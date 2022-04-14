import React from "react";
import Node from "./Node";
import "../styles/DisplayTree.css";

const DisplayTree = (tree) => {
  let t = new Tree(6, [
    new Tree(1, [new Tree(11), new Tree(2), new Tree(3)]),
    new Tree(10, [new Tree(7), new Tree(9), new Tree(8)]),
    new Tree(5, [new Tree(0), new Tree(4)]),
  ]);
  const indexedTree = make(t, 0, null, 0).slice(0, t.length);
  console.log(indexedTree);
  console.log(numDepth);
  return (
    <div className="display-tree">
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        position: "absolute",
      }}
    ></div>
      {indexedTree.map((node) => (
        <Node
          key={node[3]}
          label={node[0]}
          depth={node[1]}
          parent={node[2]}
          uid={node[3]}
          map={numDepth}
          num={node[4]}
        ></Node>
      ))}
    </div>
  );
};

function Tree(label, branches = []) {
  this.label = label;
  this.branches = branches;
}
let uid = 0;
const nodes = [];
const numDepth = new Map();
let num = 0;
function make(t, layer, parent) {
  if (numDepth.has(layer)) {
    numDepth.set(layer, numDepth.get(layer) + 1);
    num = numDepth.get(layer);
  } else {
    numDepth.set(layer, 0);
    num = numDepth.get(layer);
  }
  nodes.push([t.label, layer, parent, uid, num]);
  uid += 1;
  t.branches.forEach((branch) => make(branch, layer + 1, t.label));
  return nodes;
}

export default DisplayTree;
