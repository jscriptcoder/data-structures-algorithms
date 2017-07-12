export function reverse(str: string): string {
  const len = str.length;
  if (len) {
    return str[len - 1] + reverse(str.substr(0, len - 1));
  } else {
    return '';
  }
}