export function loopDownToCero(n: number, callback: {(n: number): void}): void {
  while(n >= 0) {
    callback(n);
    n--;
  }
} 

export function loopDownToCeroRecursive(n: number, callback: {(n: number): void}): void {
  if (n >= 0) {
    callback(n);
    loopDownToCeroRecursive(--n, callback);
  }
}

export function exponent(base: number, expo: number): number {
  let result: number = base;
  loopDownToCero(expo - 1, () => result *= result);
  return result;
}

export function exponentRecursive(base: number, expo: number): number {
  let result: number = base;
  loopDownToCeroRecursive(expo - 1, () => result *= result);
  return result;
}

export function recursiveMultiplier(arr: number[], num: number): number[] {
  if (arr.length) {
    return [arr[0] * num].concat(recursiveMultiplier(arr.slice(1), num));
  } else {
    return [];
  }
}

export function recursiveReverse(arr: number[]): number[] {
  const len = arr.length;
  if (len) {
    return [arr[len - 1]].concat(recursiveReverse(arr.slice(0, len - 1)));
  } else {
    return [];
  }
}