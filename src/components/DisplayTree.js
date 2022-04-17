import React, { useState, useEffect } from "react";
import Node from "./Node";
import "../styles/DisplayTree.css";

let flattenedhNodes,
  hNodes,
  userTree = [];

const DisplayTree = ({ tree, goal }) => {
  try {
    userTree = eval(tree);
  } catch (error) {
    window.location.reload();
  }
  hNodes = findPaths(userTree, goal);
  console.log(JSON.stringify(hNodes));
  flattenedhNodes = hNodes.flat();
  console.log(hNodes.toString());
  const indexedTree = make(userTree, 0, null, 0).slice(0, userTree.length);
  return (
    <>
      <div className="center background">
        <div id="code-block">
          <pre>
            <blockquote>
              <code>
                path_to_{goal} = path_yielder({tree}, {goal})
              </code>
            </blockquote>
            <blockquote>
              <code>
                next(path_to_{goal}) = {JSON.stringify(hNodes[0])} OR
                list(path_to_
                {goal}) = {JSON.stringify(hNodes)}
              </code>
            </blockquote>
          </pre>
        </div>
      </div>
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
      {/* <div className="center">
        <button type="button" onClick={window.location.reload()}>
          Get Values
        </button>
      </div> */}
    </>
  );
};

function validateTree(Tree) {}

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
      result.push([tree.label].concat(lst));
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
  let labelHash = hasher(t.label);
  if (numDepth.has(layer)) {
    numDepth.set(layer, numDepth.get(layer) + 1);
    num = numDepth.get(layer);
  } else {
    numDepth.set(layer, 0);
    num = numDepth.get(layer);
  }
  if (flattenedhNodes.includes(t.label)) {
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
