const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    this._root = null; // root of the tree
  }

  add(data) {

    const newNode = new Node(data);

    if (!this._root) {
      this._root = newNode;
    } else {
      this._addNode(this._root, newNode);
    }

  }

  has(/* data */) {

  }

  find(/* data */) {

  }

  remove(/* data */) {

  }

  min() {

  }

  max() {

  }
}

module.exports = {
  BinarySearchTree
};