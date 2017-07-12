export function flatten(arr: any[]): any[] {
  return arr.map(item => {
    if (item instanceof Array) {
      return flatten(item);
    } else {
      return item;
    }
  });
}