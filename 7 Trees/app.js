// In computer science, a binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    //   create a new node
    const newNode = new Node(value);
    // if the root is null then new root equals to the new node
    if (this.root === null) {
      this.root = newNode;
    } else {
      // keep track of the current node
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // go left
          if (!currentNode.left) {
            currentNode.left = newNode;
            console.log(this);
            return this;
          }
          //  reasssing the current node
          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            console.log(this);
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }
}

const tree = new BinarySearchTree();
