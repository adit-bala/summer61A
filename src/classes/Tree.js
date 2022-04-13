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
