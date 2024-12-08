const fs = require('node:fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const studentStats = {};
  const students = fs.readFileSync(path, 'utf8');
  if (students) {
    const arrayStudents = students.split('\n').slice(1);

    arrayStudents.forEach((studentLine) => {
      const studentInfo = studentLine.split(',');
      const course = studentInfo[studentInfo.length - 1];
      if (!Object.prototype.hasOwnProperty.call(studentStats, course)) {
        studentStats[course] = [studentInfo[0]];
      } else {
        studentStats[course] = [...studentStats[course], studentInfo[0]];
      }
    });

    console.log(`Number of students: ${arrayStudents.length}`);
    Object.keys(studentStats).forEach((key) => {
      console.log(
        `Number of students in ${key}: ${studentStats[key].length}. List: ${studentStats[key].join(', ')}`,
      );
    });
  }
}

module.exports = countStudents;
