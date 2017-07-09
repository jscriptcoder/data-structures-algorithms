export interface Comparator<T> {
  (val1: T, val2: T): boolean;
}

type NumStr = number | string;

export const greaterThan: Comparator<NumStr> = (val1: NumStr, val2: NumStr): boolean => {
  return val1 > val2;
}