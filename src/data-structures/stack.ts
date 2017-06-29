/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?

 */

import { Storage, createStorage } from './utils';

export class Stack<T> {
  
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