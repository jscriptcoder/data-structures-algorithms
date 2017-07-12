export function greatestCommonDivisor(num1: number, num2: number): number {
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);

  if (max % min === 0) {
    return min;
  } else {
    return greatestCommonDivisor(min, max % min);
  }
  
}