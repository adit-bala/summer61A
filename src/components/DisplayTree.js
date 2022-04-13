import React from "react";

const DisplayTree = (tree) => {
  var t = new Tree(3, [new Tree(2, [new Tree(5)]), new Tree(4)]);
  return <div></div>;
};

function Tree(label, branches=[]) {
    this.label = label;
    this.branches=[]
  }

export default DisplayTree;
