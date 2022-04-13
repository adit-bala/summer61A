class Tree {
  constructor(label, branches = []) {
    branches.forEach((branch) => console.assert(branch instanceof Tree, true));
    this.label = label;
    this.branches = branches;
  }

  is_leaf() {
    return this.branches.length === 0;
  }

  label() {
    return this.label;
  }
}

var t = new Tree(3, [new Tree(2, [new Tree(5)]), new Tree(4)]);
console.log(t.label);
console.log(t.branches[0].label);
console.log(t.branches[1].is_leaf());

// export default Tree;
