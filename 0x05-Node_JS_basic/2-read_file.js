const fs = require('node:fs');

function countStudents(path) {
  const studentStats = {};
  let studentStatsKeys;
  let studentStatsValues;
  let course;
  try {
    const students = fs.readFileSync(path, 'utf8');
    if (students) {
      const arrayStudents = students.split('\n').slice(1);
      arrayStudents.forEach((studentLine) => {
        const studentInfo = studentLine.split(',');
        studentStatsKeys = Object.keys(studentStats);
        course = studentInfo[studentInfo.length - 1];
        if (!studentStatsKeys.includes(course)) {
          studentStats[course] = [studentInfo[0]];
        } else {
          studentStatsValues = studentStats[course];
          studentStats[course] = [...studentStatsValues, studentInfo[0]];
        }
      });
      console.log(`Number of students: ${arrayStudents.length}`);
      studentStatsKeys = Object.keys(studentStats);
      studentStatsKeys.forEach((element) => {
        console.log(`Number of students in ${element}: ${studentStats[element].length}. List: ${studentStats[element].join(', ')}`);
      });
    }
  } catch (err) {
    console.log(err);
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
