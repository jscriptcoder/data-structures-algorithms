/*
  LinkedList
  
  Name your class / constructor (something you can call new on) LinkedList
  
  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.
  
  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value
                      
  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.
*/

class Node<T> {
  public value: T;
  public next: Node<T>;
  constructor(value: T) {
    this.value = value;
  }
}

export class LinkedList<T> {

  private tail: Node<T>;
  private head: Node<T>;
  private _length: number;

  constructor() {
    this.tail = this.head = null;
    this._length = 0;
  }

  // O(1)
  public push(value: T): number {
    const node = new Node(value);
    if (this._length === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;

    return ++this._length;
  }

  // O(n)
  public pop(): T {
    let value;

    if (this._length === 1) {

      value = this.head.value;
      this.tail = this.head = null;
      this._length--;

    } else if (this._length > 1) {

      value = this.tail.value;
      const penultimate = this.getNode(this._length - 2);
      penultimate.next = null;
      this.tail = penultimate;
      this._length--;

    }

    return value;
  }

  // O(n)
  public get(index: number): T {
    const node = this.getNode(index);
    if (node) {
      return node.value;
    }
  }

  // O(n)
  public delete(index: number): T {
    let deleted: Node<T>;

    if (index === 0) {

      deleted = this.head;

      if (this._length > 1) {
        this.head = this.head.next;
        this._length--;
      } else {
        this.tail = this.head = null;
        this._length = 0;
      }

    } else if (index > 0 && index < this._length) {

      const previous = this.getNode(index - 1);
      deleted = previous.next;

      if (index === this._length - 1) {
        previous.next = null;
        this.tail = previous;
      } else {
        previous.next = previous.next.next;
      }

      this._length--;

    }

    return deleted ? deleted.value : void 0;
  }

  // O(1)
  public get length(): number {
    return this._length;
  }

  // O(n)
  private getNode(index: number): Node<T> {
    if (this._length > 0 && index < this._length) {
      let count = index;
      let node = this.head;
      while(count--) {
        node = node.next;
      }
      return node;
    }
  }

}