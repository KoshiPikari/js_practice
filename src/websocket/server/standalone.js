/**
 * @fileOverview
 */

var io = require('socket.io').listen(3000);

io.sockets.on('connection', function(socket) {
    setInterval(function() {
        socket.emit('msg', {msg: 'from server', now: new Date()});
    }, 3000);

    socket.on('msg', function(data) {
        console.log('from client', data);
    });

    socket.on('disconnect', function() {
        console.log('disconnect');
    });
});