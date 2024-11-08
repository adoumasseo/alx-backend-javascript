export default function getStudentIdsSum(objList) {
  return objList.reduce((sum, value) => sum + value.id, 0);
}
