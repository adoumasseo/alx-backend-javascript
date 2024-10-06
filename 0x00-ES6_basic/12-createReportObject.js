export default function createReportObject(employeesList) {
  const newOject = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(allEmployees) {
      return Object.keys(allEmployees).length;
    },
  };

  return newOject.allEmployees;
}
