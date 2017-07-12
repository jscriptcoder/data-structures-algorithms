import { Storage, createStorage } from './utils';

export class Queue<T> {
  
  private capacity: number;
  private storage: Storage<T>;
  private length: number;

  constructor(capacity: number = Infinity) {
    this.capacity = capacity;
    this.storage = createStorage<T>();
    this.length = 0;
  }

  // O(1)
  public enqueue(value: T): number {
    if (this.length < this.capacity) {
      this.storage[this.length] = value;
      return ++this.length;
    } else {
      throw "Max capacity already reached. Remove element before adding a new one.";
      
    }
  }

  // O(1)
  public dequeue(): T {
    if (this.length > 0) {
      const value = this.storage[0];
      delete this.storage[0];
      this.length--;
      return value;
    }
  }

  // O(1)
  public peek(): T {
    if (this.length > 0) {
      return this.storage[0];
    }
  }

  // O(1)
  public size(): number {
    return this.length;
  }

  // O(n)
  public contains(value: T): boolean {
    return !!Object.keys(this.storage).find(key => this.storage[key] === value);
  }

  // O(n)
  public until(value: T): number {
    let numDequeues = 0;
    for(let i = 0; i < this.length; i++) {
      if (this.storage[i] === value) {
        return ++numDequeues;
      } else {
        numDequeues++;
      }
    }

    throw "Value does not exist in the Queue";
    
  }

}