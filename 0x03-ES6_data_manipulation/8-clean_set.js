export default function cleanSet(theSet, theString) {
  const finalString = [];
  if (!theSet || !theString || !(theSet instanceof Set) || typeof theString !== 'string') {
    return '';
  }
  for (const item of theSet) {
    if (item.startsWith(theString)) {
      const subString = item.slice(theString.length, item.length);
      if (subString && subString !== item) {
        finalString.push(item.slice(theString.length, item.length));
      }
    }
  }
  return finalString.join('-');
}
