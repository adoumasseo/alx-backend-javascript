export default function createIteratorObject(report) {
  return [...Object.values(report).flat()];
}
