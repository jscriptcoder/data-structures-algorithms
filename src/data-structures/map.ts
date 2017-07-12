import { Storage, createStorage } from './utils';

export class Map<K, V> {

  private ks: Storage<K>;
  private vs: Storage<V>;
  private _length: number;

  constructor(entries?: Array<[K, V]>) {
    this.ks = createStorage<K>();
    this.vs = createStorage<V>();
    this._length = 0;
    // TODO return the map with the initial entries passed in
  }

  // O(1)
  public get size(): number {
    return this._length;
  }

  // O(1)
  public clear(): Map<K, V> {
    this.ks = createStorage<K>();
    this.vs = createStorage<V>();
    this._length = 0;
    return this;
  }

  // O(n)
  public delete(key: K): boolean {
    const idx = this.findIndexKey(key);
    const found = idx >= 0;
    if (found) {
      delete this.ks[idx];
      delete this.vs[idx];
      this._length--;
    }
    return found;
  }

  // O(n)
  public entries(): Array<[K, V]> {
    const entries: Array<[K, V]> = [];
    this.forEach((key: K, val: V) => entries.push([key, val]));
    return entries;
  }

  // O(n)
  public forEach(callback: {(key: K, val: V): void}): Map<K, V> {
    for (let i = 0, len = this._length; i < len; i++) {
      callback(this.ks[i], this.vs[i]);
    }
    return this;
  }

  // O(n)
  public get(key: K): V | undefined {
    const idx = this.findIndexKey(key);
    return this.vs[idx];
  }

  // O(n)
  public has(key: K): boolean {
    return this.findIndexKey(key) >= 0;
  }

  // O(n)
  public keys(): K[] {
    const keys: K[] = [];
    this.forEach((key: K, val: V) => keys.push(key));
    return keys;
  }

  // O(n)
  public set(key: K, val: V): Map<K, V> {
    const idx = this.findIndexKey(key);
    if(idx >= 0) {
      this.vs[idx] = val;
    } else {
      this._length++;
      this.ks[this._length] = key;
      this.vs[this._length] = val;
    }
    return this;
  }

  // O(n)
  public values(): V[] {
    const vals: V[] = [];
    this.forEach((key: K, val: V) => vals.push(val));
    return vals;
  }

  // O(n)
  private findIndexKey(key: K): number {
    for (let i = 0, len = this._length; i < len; i++) {
      if (key === this.ks[i]) {
        return i;
      }
    }
    return -1;
  }
}