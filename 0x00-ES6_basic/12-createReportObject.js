export default function createReportObject(employeesList) {
  const newOject = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };

  return newOject;
}
