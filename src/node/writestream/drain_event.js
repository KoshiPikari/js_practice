/**
 * @fileOverview
 */

var fs = require('fs');

var ws = fs.createWriteStream('./output1.txt', {encoding: 'utf8'});

ws.on('open', function(fd) {
    console.log('open', fd);
});
ws.on('drain', function() {
    console.log('drain');
});
for (var i=0; i<100000; i++) {
    ws.write(String(i));
}

ws.end();
