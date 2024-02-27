// 7-http_express.js

const express = require('express');
const countStudents = require('./3-read_file_async');

// Create Express app
const app = express();

// Define route handlers
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', (req, res) => {
  // Check if the database file is provided as a command line argument
  const dbFilePath = process.argv[2];
  if (!dbFilePath) {
    res.status(500).send('Database file not provided.\n');
    return;
  }

  // Read the students data from the database file asynchronously using the countStudents function
  countStudents(dbFilePath)
    .then(() => {
      res.end();
    })
    .catch(error => {
      res.status(500).send(error.message + '\n');
    });
});

// Start the server
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;
