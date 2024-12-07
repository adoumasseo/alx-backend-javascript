process.stdout.write('Welcome to ALX, what is your name\n');
process.stdin.on('readable', () => {
  const userInput = process.stdin.read();
  if (userInput) {
    process.stdout.write(`Your name is: ${userInput}`);
  }
});
process.on('beforeExit', () => {
  process.stdout.write('This important software is now closing\n');
});
