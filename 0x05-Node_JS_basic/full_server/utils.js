// full_server/utils.js

const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const studentsByFields = {};

    lines.forEach(line => {
      const [firstName, , , field] = line.split(',');
      if (studentsByFields[field]) {
        studentsByFields[field].push(firstName);
      } else {
        studentsByFields[field] = [firstName];
      }
    });

    return studentsByFields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = { readDatabase };
