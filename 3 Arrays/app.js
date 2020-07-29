// There are two types of arrays Dynamic and Static
// Static arrays fixed in size, the number of elements must be specified ahead of time
// Dynamic arrays allow us to copy and rebuild an array at a new location in memory

// implementing an array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // get an item from an array by index
  get(index) {
    return this.data[index];
  }

  // push item to an array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // pop item from an array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    return lastItem;
  }

  // delete index by index
  delete(index) {
    const deletedItem = this.data[index];
    shiftItems(index);
    return deletedItem;
  }

  //   shift items after deletion
  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data[this.length - 1];
    length--;
  }
}
