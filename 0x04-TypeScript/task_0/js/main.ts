interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const stdOne: Student = {
  firstName: 'Ortniel',
  lastName: 'ADOUMASSE',
  age: 20,
  location: 'Benin  Abomey-Calavi'
}

const stdTwo: Student = {
  firstName: 'Anaïs',
  lastName: 'ADOUMASSE',
  age: 24,
  location: 'Benin  Abomey-Calavi'
}

const studentsList: Student[] = [stdOne, stdTwo];

const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }
  td:nth-child(1) {
    text-align: center;
  }
`;

export const displayStudents = (students: Student[]): void => {
  const table = document.createElement('table');
  const tHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tBody = document.createElement('tbody');
  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
  tHead.insertAdjacentElement('beforeend', headRow);

  for (const item of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${item.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${item.lastName}</td>`);
    tBody.insertAdjacentElement('beforeend', bodyRow);
  }
  table.insertAdjacentElement('beforeend', tHead);
  table.insertAdjacentElement('beforeend', tBody);
  document.body.insertAdjacentElement('beforeend', table);
};

displayStudents(studentsList);
const styleSheetsElement = document.createElement('style');
styleSheetsElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetsElement);
document.title = 'Task 0';

