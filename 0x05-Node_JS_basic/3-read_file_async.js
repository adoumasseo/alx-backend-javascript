const fs = require('node:fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, students) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const studentsString = students.toString();
        const studentStats = {};
        const arrayStudents = studentsString.split('\n').slice(1);
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
        resolve(true);
      }
    });
  });
}

module.exports = countStudents;
