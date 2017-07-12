import { Comparator } from './utils';

// Worst O(n2)
// Best O(n) nearly sorted
export default function insertionSort<T>(arr: T[], comparator: Comparator<T>): void {
  for (let pivot = 1; pivot < arr.length; pivot++) {
    const pivotVal = arr[pivot];
    let i = pivot - 1;
    while (i >= 0 && comparator(arr[i], pivotVal)) {
      arr[i+1] = arr[i];
      i--;
    }
    arr[i+1] = pivotVal;
  }
}

export function shellSort<T>(arr: T[], comparator: Comparator<T>): void {
  
}