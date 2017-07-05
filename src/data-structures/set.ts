/*
  Set
  
  Properties:
    size

  Methods:
    add()
    clear()
    delete()
    forEach()
    has()
    values()
*/

import { Storage, createStorage } from './utils';

// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
export class Set<T> {

  private storage: Storage<T>;
  private _length: number;

  constructor(iterable?: Iterable<T>) {
    this.storage = createStorage<T>();
    this._length = 0;
    // TODO return the set with the initial values passed in
  }

  // O(1)
  public get size(): number {
    return this._length;
  }

  // O(n)
  public add(value: T): Set<T> {
    if(!this.has(value)) {
      this.storage[this._length++] = value;
    }
    return this;
  }

  // O(1)
  public clear(): Set<T> {
    this.storage = createStorage<T>();
    return this;
  }

  // O(n)
  public delete(value: T): boolean {
    const idx = this.findIndex(value);
    const found = idx >= 0;
    if (found) {
      delete this.storage[idx];
    }
    return found;
  }

  // O(n)
  public forEach(callback: {(value: T): void}): void {
    for (let i = 0, len = this._length; i < len; i++) {
      callback(this.storage[i]);
    }
  }

  // O(n)
  public has(value: T): boolean {
    return this.findIndex(value) >= 0;
  }

  // O(n)
  public values(): T[] {
    const values: T[] = [];
    this.forEach(val => values.push(val));
    return values;
  }

  // O(n)
  private findIndex(value: T): number {
    for (let i = 0, len = this._length; i < len; i++) {
      if (value === this.storage[i]) {
        return i;
      }
    }
    return -1;
  }
}