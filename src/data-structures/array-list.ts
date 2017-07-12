import { Storage, createStorage } from './utils';

export class ArrayList<T> {

  private storage: Storage<T>;
  private _length: number;

  constructor() {
    this.storage = createStorage<T>();
    this._length = 0;
  }

  // O(1)
  public push(value: T): number {
    this.storage[this._length] = value;
    return ++this._length;
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

  // O(n)
  public insert(index: number, value: T): number {
    this.shiftFrom(index);
    this.storage[index] = value;
    return ++this._length;
  }

  // O(n)
  public delete(index: number): T {
    const value = this.storage[index];
    this.collapseTo(index);
    return value;
  }

  // O(1)
  public get length(): number {
    return this._length;
  }

  // O(n)
  private shiftFrom(index: number): void {
    const lastIdx = this._length - 1;
    for (let i = lastIdx; i > index ; i--) {
      this.storage[i+1] = this.storage[i];
    }
  }

  // O(n)
  private collapseTo(index: number): void {
    const lastIdx = this._length - 1;
    for (let i = index; i < lastIdx; i++) {
      this.storage[i] = this.storage[i+1];
    }
    delete this.storage[lastIdx];
    this._length--;
  }

}