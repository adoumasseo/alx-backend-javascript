export default function (objList, city) {
  if (!Array.isArray(objList)) {
    return [];
  }
  return objList.filter((value) => value.location === city);
}
