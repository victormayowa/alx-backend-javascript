// 6-http_express.js

const express = require('express');

// Create Express app
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Handle unknown routes
// Start the server
const PORT = 1245;
app.listen(PORT);
});

module.exports = app;
