// File: 1-stdin.js

console.log("Welcome to Holberton School, what is your name?");

process.stdin.setEncoding('utf8');

// Read the first line of input
process.stdin.once('data', (data) => {
  const input = data.trim();

  if (input === 'exit') {
    console.log("This important software is now closing");
    process.exit();
  } else {
    console.log(`Your name is: ${input}`);
    // Check if input is coming from a pipe (piped input)
    if (!process.stdin.isTTY) {
      console.log("This important software is now closing");
      process.exit();
    }
	  process.exit();
  }
});
