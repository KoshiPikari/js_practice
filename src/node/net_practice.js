/**
 * telnet localhost 8124
 * @type {exports|module.exports}
 */

var net = require('net');

var server = net.createServer(function(client) {
    console.log('client connected');
    client.on('end', function() {
       console.log('client disconnected');
    });
    client.write('hello\r\n');
    client.write(client.remoteAddress);
    client.pipe(client);
});

server.listen(8124, function() {
    console.log('server bound');
});

/**
 * $telnet localhost 8124
 */
