/**
 * @fileOverview
 */

var fs = require('fs');

var options = {encoding: 'utf8'};
var ws = fs.createWriteStream('./output_error.txt', options);

ws.on('open', function() {
    console.log('open');
});
ws.on('drain', function() {
    console.log('drain');
});
ws.on('error', function(exception) {
    console.log('error', exception);
});
ws.on('close', function() {
    console.log('close');

});
ws.on('pipe', function(src) {
    console.log('pipe');
});

for (var i=0; i<10 && ws.writable; i++) {
    ws.write(String(i));
    if (i === 9) {
        ws.destroy();
    }
}

ws.end();


