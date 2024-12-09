const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', 'Hello Holberton School!'.length);
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(port, hostname, () => {
  process.stdout.write(`Server listening at -> http://${hostname}:${port}\n`);
});

module.exports = app;
