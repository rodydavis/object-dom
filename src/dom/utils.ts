export function convertToPathCase(val: string) {
  return val
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
