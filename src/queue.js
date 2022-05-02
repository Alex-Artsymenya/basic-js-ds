const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
}

  getUnderlyingList() {
   // if (!this.head ) { return null};
    return this.head;
  }

  enqueue(value ) {
    if (!this.head ) {
                this.head= new Node (value);
                this.length=1;
                return this;
    };
    let pointer=this.head;
    for (let i=1; i<this.length;i++){
      pointer=pointer.next;
    }
    pointer.next=new Node (value);
    this.length++;
  return this;
  }

  dequeue() {
    if (!this.head ) { return null};
    let pointer=this.head;
    let item=pointer.value;
    if (!pointer.next){this.head = null;
                       this.length = 0; }
    else {this.head = pointer.next;
          this.length --;
    };
    return item;
      }
}


module.exports = {
  Queue
};
