const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello from ${port}\n`);
});

server.listen(port, '192.168.1.83', () => {
  console.log(`Server running at http://192.168.1.83:${port}/`);
});

