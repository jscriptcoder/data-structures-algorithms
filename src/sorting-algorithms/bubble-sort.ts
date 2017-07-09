/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/

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