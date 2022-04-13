import React from "react";
import Node from "./Node";

const DisplayTree = (tree) => {
  var t = new Tree(3, [new Tree(2, [new Tree(5)]), new Tree(4)]);
  const indexedTree = make(t, 0, null).slice(0, t.length);
  console.log(indexedTree);
  return (
    <div>
      {indexedTree.map((node) => (
        <Node key={node[3]} label={node[0]} layer={node[1]} parent={node[2]}></Node>
      ))}
    </div>
  );
};

function Tree(label, branches = []) {
  this.label = label;
  this.branches = branches;
}

const nodes = [];
function make(t, layer, parent) {
  nodes.push([t.label, layer, parent, uid]);
  uid += 1;
  t.branches.forEach((branche) => make(branche, layer + 1, t.label));
  return nodes;
}

let uid = 0;
export default DisplayTree;
