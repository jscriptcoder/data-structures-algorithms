import { Storage, createStorage } from './utils';

export default class Stack<T> {
  
  private capacity: number;
  private storage: Storage<T>;
  private length: number;

  constructor(capacity: number = Infinity) {
    this.capacity = capacity;
    this.storage = createStorage<T>();
    this.length = 0;
  }

  // O(1)
  public push(value: T): number {
    if (this.length < this.capacity) {
      this.storage[this.length] = value;
      return ++this.length;
    } else {
      throw "Max capacity already reached. Remove element before adding a new one.";
      
    }
  }

  // O(1)
  public pop(): T {
    if (this.length > 0) {
      const value = this.storage[this.length - 1];
      delete this.storage[--this.length];
      return value;
    }
  }

  // O(1)
  public peek(): T {
    if (this.length > 0) {
      return this.storage[this.length - 1];
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
    let numPops = 0;
    for(let i = this.length - 1; i >= 0; i--) {
      if (this.storage[i] === value) {
        return ++numPops;
      } else {
        numPops++;
      }
    }

    throw "Value does not exist in the Stack";
    
  }

}