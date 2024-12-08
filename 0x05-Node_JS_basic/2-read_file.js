const fs = require('node:fs');

function countStudents(path) {
  const studentStats = {};

  try {
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
