/**
 * @fileOverview
 * /v0.8.26/bin/node writestream.js
 * open ws1 8
 * open ws2 9
 */

var fs = require('fs');

var ws = fs.createWriteStream('./output.txt', {encoding: 'utf8'});

ws.on('open', function(fd) {
    console.log('open ws. fd:', fd);
});
ws.on('close', function() {
    console.log('close');
});
ws.on('error', function(exception) {
    console.log('error. exception:', JSON.stringify(exception, null, 2));
});

for (var i=0; i<100; i++) {
    ws.write(String(i));
}

ws.destroy();

for (var i=0; i<100; i++) {
    ws.write(String(i));
}
//ws.destroySoon();
