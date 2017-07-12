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
  public insert(index: number, value: T): number {
    let newNode = new Node(value);

    if (index === 0) {
      if (this._length > 1) {
        newNode.next = this.head;
        this.head = newNode;
        this._length++;
      } else {
        this.tail = this.head = newNode;
        this._length = 1;
      }
    } else if (index > 0 && index < this._length) {

      const previous = this.getNode(index - 1);
      [newNode.next, previous.next] = [previous.next, newNode];

      if (index === this._length - 1) {
        this.tail = newNode.next;
      }

      this._length++;

    }
    

    return this._length;
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