/**
 * @fileOverview
 */

var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function(socket) {
    setInterval(function() {
        socket.emit('msg', {msg: 'from server', data: new Date()});
    }, 1000);

    socket.on('msg', function(data) {
        console.log(data);
    });

    socket.on('disconnect', function() {
        console.log('disconnect');
    });
});

io.listen(3000);
