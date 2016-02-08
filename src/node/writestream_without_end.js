/**
 * @fileOverview
 */

/**
 * @fileOverview
 */

var fs = require('fs');

var options = {encoding: 'utf8'};
var ws = fs.createWriteStream('./success_without_end.txt', options);

ws.on('open', function() {
    console.log('open');
});
ws.on('drain', function() {
    console.log('drain');
});
ws.on('error', function(err) {
    console.log(err);
});
ws.on('close', function() {
    console.log('close');
});
ws.on('pipe', function() {
    console.log('pipe');
});

for (var i=0; i<100000; i++) {
    ws.write(String(i));
}

