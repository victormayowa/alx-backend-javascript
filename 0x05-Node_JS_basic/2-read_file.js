// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    let csCount = 0;
    let sweCount = 0;
    const csStudents = [];
    const sweStudents = [];

    lines.forEach(line => {
      const [firstname, lastname, age, field] = line.split(',');
      if (field === 'CS') {
        csCount++;
        csStudents.push(firstname);
      } else if (field === 'SWE') {
        sweCount++;
        sweStudents.push(firstname);
      }
    });

    console.log(`Number of students: ${lines.length}`);
    console.log(`Number of students in CS: ${csCount}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
