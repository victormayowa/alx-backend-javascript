// 5-http.js

const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

// Create HTTP server
const app = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Routing based on URL path
  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    // Check if the database file is provided as a command line argument
    const dbFilePath = process.argv[2];
    if (!dbFilePath) {
      res.end('Database file not provided.\n');
      return;
    }

    // Read the students data from the database file asynchronously
    countStudents(dbFilePath)
      .then(() => {
        res.end();
      })
      .catch(error => {
        res.end(error.message + '\n');
      });
  } else {
    // Handle unknown routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found\n');
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;

