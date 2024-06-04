if (process.stdin.isTTY) {
  process.stdin.setRawMode(false);
} else {
  process.on('exit', () => {
    console.log('This important software is now closing');
  });
}

const prmpt = 'Welcome to Holberton School, what is your name?';
console.log(prmpt);
process.stdin.once('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
  process.exit();
});

process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit();
});
