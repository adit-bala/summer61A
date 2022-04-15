import React, { useState, useEffect } from "react";
import Node from "./Node";
import "../styles/DisplayTree.css";

let hNodes = [];

const DisplayTree = ({ tree, goal }) => {
  let userTree = eval(tree);
  hNodes = traverseTrees(userTree, goal);
  const indexedTree = make(userTree, 0, null, 0).slice(0, userTree.length);
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
          highlight={node[5]}
        ></Node>
      ))}
    </div>
  );
};

function Tree(label, branches = []) {
  this.label = label;
  this.branches = branches;
}

function traverseTrees(tree, goal) {
  let arr = [];
  if (hasPath(tree, arr, goal)) {
    return arr;
  }
}

function hasPath(tree, arr, goal) {
  if (tree == null) {
    return false;
  }
  arr.push(tree.label);
  if (tree.label === goal) return true;
  for (let branch of tree.branches) {
    if (hasPath(branch, arr, goal)) {
      return true;
    }
  }
  arr.pop();
  return false;
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
  if (hNodes.includes(t.label)) {
    nodes.push([t.label, layer, parent, uid, num, true]);
  } else {
    nodes.push([t.label, layer, parent, uid, num, false]);
  }
  uid += 1;
  t.branches.forEach((branch) => make(branch, layer + 1, t.label));
  return nodes;
}

export default DisplayTree;
