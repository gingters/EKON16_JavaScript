var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');

  console.log('Incoming request:');
  console.log(req.headers);
  console.log('\n');
});

server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');