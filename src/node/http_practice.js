var http = require('http');

var httpd = http.createServer();
httpd.listen(8080);

httpd.on('request', function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello.');
    response.end('World\n');
});