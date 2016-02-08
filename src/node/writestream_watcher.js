/**
 * @fileOverview
 */

var fs = require('fs');

var options = {encoding: 'utf8'};
var filename = './output.txt';
var ws = fs.createWriteStream(filename, options);
var watcher = fs.watch(filename);

watcher.on('change', function(event, filename) {
    console.log('change', event, filename);
});

watcher.on('error', function(err) {
    console.log(err);
});

ws.on('open', function() {
    console.log('open');
});
ws.on('drain', function() {
    console.log('drain');
});
ws.on('error', function(exception) {
    console.log(exception);
});
ws.on('close', function() {
    console.log('close');
});
ws.on('pipe', function(src) {
    console.log('pipe');
});

for (var i=0; i<10; i++) {
    ws.write(String(i));
}

ws.end();

fs.renameSync(filename, filename + 'new');

