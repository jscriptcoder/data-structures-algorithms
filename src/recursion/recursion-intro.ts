//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
export function loopDownToCero(n: number, callback: {(n: number): void}): void {
  while(n >= 0) {
    callback(n);
    n--;
  }
} 

//2. Next, try looping just like above except using recursion
export function loopDownToCeroRecursive(n: number, callback: {(n: number): void}): void {
  if (n >= 0) {
    callback(n);
    loopDownToCeroRecursive(--n, callback);
  }
}

//3. Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
export function exponent(base: number, expo: number): number {
  let result: number = base;
  loopDownToCero(expo - 1, () => result *= result);
  return result;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
export function exponentRecursive(base: number, expo: number): number {
  let result: number = base;
  loopDownToCeroRecursive(expo - 1, () => result *= result);
  return result;
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
export function recursiveMultiplier(arr: number[], num: number): number[] {
  if (arr.length) {
    return [arr[0] * num].concat(recursiveMultiplier(arr.slice(1), num));
  } else {
    return [];
  }
}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
export function recursiveReverse(arr: number[]): number[] {
  const len = arr.length;
  if (len) {
    return [arr[len - 1]].concat(recursiveReverse(arr.slice(0, len - 1)));
  } else {
    return [];
  }
}