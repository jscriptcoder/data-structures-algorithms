interface Storage<T> {
  [key: string]: T;
}

export function createStorage<T>(): Storage<T> {
  return {};
}