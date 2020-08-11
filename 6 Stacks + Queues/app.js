// In computer science, a stack is an abstract data type that serves as a collection of elements, with two main principal operations:

// push, which adds an element to the collection, and
// pop, which removes the most recently added element that was not yet removed.

// In computer science, a queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {}

  push(value) {
    const newNode = new Node(value);
  }

  pop() {}
}

const stack = new Stack();
