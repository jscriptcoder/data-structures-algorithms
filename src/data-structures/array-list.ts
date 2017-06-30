/*
  ArrayList
  
  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value
*/

import { Storage, createStorage } from './utils';

export class ArrayList<T> {

  private capacity: number;
  private storage: Storage<T>;
  private _length: number;

  constructor(capacity: number = Infinity) {
    this.capacity = capacity;
    this.storage = createStorage<T>();
    this._length = 0;
  }

  // O(1)
  public push(value: T): number {
    if (this._length < this.capacity) {
      this.storage[this._length] = value;
      return ++this._length;
    } else {
      throw "Max capacity already reached. Remove element before adding a new one.";
    }
  }

  // O(1)
  public pop(): T {
    if (this._length > 0) {
      const value = this.storage[this._length - 1];
      delete this.storage[--this._length];
      return value;
    }
  }

  // O(1)
  public get(index: number): T {
    return this.storage[index];
  }

  // O(1)
  public delete(index: number): T {
    const value = this.storage[index];
    delete this.storage[index];
    return value;
  }

  // O(1)
  public get length(): number {
    return this._length;
  }

}