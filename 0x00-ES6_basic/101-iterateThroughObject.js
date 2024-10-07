export default function iterateThroughObject(reportWithIterator) {
  const attAllEmployees = reportWithIterator[0];
  return [...Object.values(attAllEmployees).flat()].join(' | ');
}
