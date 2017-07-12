import { Comparator } from './utils';

// Worst O(n2)
// Best O(n2)
export default function selectionSort<T>(arr: T[], comparator: Comparator<T>): void {
  for (let pivot = 0; pivot < arr.length - 1; pivot++) {
    let min = pivot;
    for (let i = pivot + 1; i < arr.length; i++) {
      min = comparator(arr[min], arr[i]) ? i : min;
    }
    [arr[pivot], arr[min]] = [arr[min], arr[pivot]];
  }
}