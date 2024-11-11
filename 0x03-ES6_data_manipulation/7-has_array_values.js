export default function hasValuesFromArray(theSet, theArray) {
  for (let i = 0; i < theArray.length; i++) {
    if (!theSet.has(theArray[i])) {
      return false;
    }
  }
  return true;
}
