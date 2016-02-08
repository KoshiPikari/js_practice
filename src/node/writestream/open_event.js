/**
 * @fileOverview
 * /v0.8.26/bin/node writestream.js
 * open ws1 8
 * open ws2 9
 */

var fs = require('fs');

var ws1 = fs.createWriteStream('./output1.txt', {encoding: 'utf8'});
var ws2 = fs.createWriteStream('./output2.txt', {encoding: 'utf8'});

ws1.on('open', function(fd) {
    console.log('open ws', fd);
});
ws2.on('open', function(fd) {
    console.log('open ws2', fd);
});

for (var i=0; i<1000; i++) {
    ws1.write(String(i));
}
for (var i=0; i<1000; i++) {
    ws2.write(String(i));
}

ws1.end();
ws2.end();
