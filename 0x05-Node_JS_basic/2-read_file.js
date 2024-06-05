const fs = require('fs');

function countStudents(path) {
  try {
    const db = fs.readFileSync(path, { encoding: 'utf-8' });
    const rows = db.split('\n').slice(1);
    const num = rows.length;
    if (rows[num - 1] === '') {
      rows.pop();
    }
    console.log(`Number of students: ${rows.length}`);

    const studentsByFields = {};
    for (const row of rows) {
      const studentArray = row.split(',');
      const field = studentArray[3];
      if (field in studentsByFields) {
        studentsByFields[field].push(studentArray[0]);
      } else {
        studentsByFields[field] = [studentArray[0]];
      }
    }

    for (const field in studentsByFields) {
      if (Object.prototype.hasOwnProperty.call(studentsByFields, field)) {
        const list = studentsByFields[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
