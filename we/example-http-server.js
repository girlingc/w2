const http = require('http');

const server = http.createServer((function(request, response) 
{
  response.writeHead(200, 
    {"Content-Type": "text.plain"});
    response.end("Hello World!\nHow are you doing this fine evening?");
  }));
server.listen(8080);