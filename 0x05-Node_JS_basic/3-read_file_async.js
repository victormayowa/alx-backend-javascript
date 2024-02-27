// File: 3-read_file_async.js

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const numOfStudents = lines.length;
        console.log(`Number of students: ${numOfStudents}`);

        const studentsByFields = {};
        lines.forEach(line => {
          const [firstname, lastname, age, field] = line.split(',');
          if (field in studentsByFields) {
            studentsByFields[field].push(firstname);
          } else {
            studentsByFields[field] = [firstname];
          }
        });

        for (const field in studentsByFields) {
          if (Object.prototype.hasOwnProperty.call(studentsByFields, field)) {
            const list = studentsByFields[field];
            console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
          }
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
