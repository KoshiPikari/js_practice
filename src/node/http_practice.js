var http = require('http');

var httpd = http.createServer();
httpd.listen(8081);

httpd.on('request', function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello.');
    if (request.url === '/heavy') {
        setTimeout(function() {
            response.write('too heavy');
            response.end();
        }, 10000);
    } else {
        response.end('World\n');
    }
});

var options = {
    host: '127.0.0.1',
    port: '8081'
};

http.get(options, function(res) {
    console.log(res.statusCode);
    if (res.statusCode === 200) {
        console.log('OK');
    }
    var body = ''
    res.on('data', function(chunk) {
        body = body + chunk;
    }).on('end', function() {
        console.log('res body', body);
    }).on('error', function(err) {
        console.log('error res body', err);
    });
});

var timeoutOptions = {
    host: '127.0.0.1',
    port: '8081',
    path: '/heavy'
};

var req = http.get(timeoutOptions, function(res) {
    console.log('NG', res.statusCode);
});

req.on('error', function(err) {
    console.log('error', err);
});

req.setTimeout(1000, function() {
    console.log('timeout');
    req.abort();
});

