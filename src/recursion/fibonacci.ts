let fibCache: {[key: string]: number} = {};

export function fibonacci(n: number): number {
  if (fibCache[n]) {
    return fibCache[n];
  } else if (n < 2) {
    return fibCache[n] = n;
  } else {
    return fibCache[n] = fibonacci(n-2) + fibonacci(n-1);
  }
}