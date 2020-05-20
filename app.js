const http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'aplication/json'});
  response.end(process.env);
}).listen(process.env.PORT);

console.log('App is running...');