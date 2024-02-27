// 6-http_express.js

const express = require('express');

// Create Express app
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Handle unknown routes
app.use((req, res, next) => {
  res.status(404).send('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Error</title></head><body><pre>Cannot GET ' + req.url + '</pre></body></html>');
});

// Start the server
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;
