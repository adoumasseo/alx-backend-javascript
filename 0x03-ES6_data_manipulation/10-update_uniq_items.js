export default function updateUniqueItems(theMap) {
  if (!(theMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of theMap) {
    if (value === 1) {
      theMap.set(key, 100);
    }
  }
  return theMap;
}
