// Worst O(n2)
// Best O(n)
export default function bubbleSort<T>(arr: T[]): void {
  let wall = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < wall - 1; i++) {
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        swapped = true;
      }
    }
    wall--;
  } while (swapped);
}

// Worst O(n2)
// Best O(n)
export function cocktailSort<T>(arr: T[]): void {
  let beginWall = 0;
  let endWall = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = beginWall; i < endWall - 1; i++) {
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        swapped = true;
      }
    }
    for(let j = endWall - 1; j > beginWall; j--) {
      if (arr[j-1] > arr[j]) {
        [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
        swapped = true;
      }
    }
    beginWall++; endWall--;
  } while (swapped);
}