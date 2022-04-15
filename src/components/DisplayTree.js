import React, { useState, useEffect } from "react";
import Node from "./Node";
import "../styles/DisplayTree.css";

let hNodes = [];

const DisplayTree = ({ tree, goal }) => {
  let userTree = eval(tree);
  hNodes = findPaths(userTree, goal);
  const nodes = findPaths(userTree, goal);
  console.log(nodes);
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

function findPaths(tree, label) {
  let result = [];

  if (tree.label === label) {
    result.push(tree.label);
  }
  for (let branch of tree.branches) {
    for (let lst of findPaths(branch, label)) {
      result.push(tree.label);
      result.push(lst);
    }
  }
  return result;
}
const nodes = [];
const numDepth = new Map();
let num = 0;
let counter = 1;
const setLabel = new Set();
function make(t, layer, parent) {
  console.log(t.label, parent);
  let labelHash = hasher(t.label);
  if (numDepth.has(layer)) {
    numDepth.set(layer, numDepth.get(layer) + 1);
    num = numDepth.get(layer);
  } else {
    numDepth.set(layer, 0);
    num = numDepth.get(layer);
  }
  if (hNodes.includes(t.label)) {
    nodes.push([t.label, layer, parent, labelHash, num, true]);
  } else {
    nodes.push([t.label, layer, parent, labelHash, num, false]);
  }
  t.branches.forEach((branch) => make(branch, layer + 1, labelHash));
  return nodes;
}

function hasher(num) {
  let str = "";
  if (setLabel.has(num)) {
    str = num.toString() + "0".repeat(counter);
    counter += 1;
  } else {
    setLabel.add(num);
    str = num.toString();
  }
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

export default DisplayTree;
