export default function getListStudentIds(objList) {
  if (!Array.isArray(objList)) {
    return [];
  }
  return objList.map((value) => value.id);
}
