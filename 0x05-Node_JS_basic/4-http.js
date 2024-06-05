// 4-http.js

const http = require('http');

// Create HTTP server
const app = http.createServer((req, res) => {
  // Set response headers
  res.write('Hello Holberton School!');

  // Send response body
  res.end();
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT);

module.exports = app;
