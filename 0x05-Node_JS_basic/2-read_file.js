// File: 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data by lines and filter out empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Initialize variables to count students in each field
    let csStudents = 0;
    let sweStudents = 0;
    let csList = [];
    let sweList = [];

    // Loop through each line to count students and create lists
    lines.forEach(line => {
      const [firstname, lastname, age, field] = line.split(',');
      if (field === 'CS') {
        csStudents++;
        csList.push(firstname);
      } else if (field === 'SWE') {
        sweStudents++;
        sweList.push(firstname);
      }
    });

    // Log the total number of students and lists
    console.log(`Number of students: ${lines.length}`);
    console.log(`Number of students in CS: ${csStudents}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents}. List: ${sweList.join(', ')}`);
  } catch (error) {
    // Handle errors when reading the file
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
