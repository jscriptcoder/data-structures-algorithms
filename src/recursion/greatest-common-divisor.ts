export function greatestCommonDivisor(num1: number, num2: number): number {
  if (num2 === 0) {
    return num1;
  } else {
    greatestCommonDivisor(num2, num1 % num2);
  }
}