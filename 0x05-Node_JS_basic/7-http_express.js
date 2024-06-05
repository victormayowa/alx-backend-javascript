const express = require('express');
const fs = require('fs');

const dbName = process.argv[2];

async function countStudents(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        rej(new Error('Cannot load the database'));
      } else {
        let resText = '';
        const students = data.split('\n').slice(1);
        const numOfStudents = students.length;
        if (students[numOfStudents - 1] === '') {
          students.pop();
        }
        resText += `Number of students: ${students.length}\n`;

        const studentsByFields = {};
        for (const student of students) {
          const studentArray = student.split(',');
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
            resText += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
          }
        }
        res(resText.slice(0, -1));
      }
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let resText = 'This is the list of our students\n';
  let counts = '';
  if (dbName) {
    counts = await countStudents(dbName)
      .then((res) => res)
      .catch((err) => err.message);
  }
  res.send(resText += counts);
});

app.listen(1245);

module.exports = app;
