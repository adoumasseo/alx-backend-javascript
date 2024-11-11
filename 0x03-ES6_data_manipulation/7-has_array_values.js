export default function hasValuesFromArray(theSet, theArray) {
  theArray.every((value) => theSet.has(value));
}
