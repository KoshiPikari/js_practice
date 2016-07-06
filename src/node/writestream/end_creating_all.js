/**
 * @fileOverview
 */

var fs = require('fs');

var numCreatedFile;
var wsList;

var init = function() {
    numCreatedFile = 0;
    wsList = [];
};

var countUpNumCreatedFile = function() {
    numCreatedFile++;
    console.log('count up numCreatedFile:', numCreatedFile);
    if (numCreatedFile === wsList.length) {
        console.log('All files have been created.');
    }
};

var errorCreatingFile = function(exception) {
    wsList.forEach(function(ws) {
        ws.removeAllListeners();
    });
    console.log(exception);
};

var createWriteStream = function(name) {
    var ws = fs.createWriteStream('./' + name + '.txt', {encoding: 'utf8'});
    wsList.push(ws);
    ws.on('close', countUpNumCreatedFile);
    ws.on('error', errorCreatingFile);
    return ws;
};

init();
var ws1 = createWriteStream('output1');
var ws2 = createWriteStream('output2');
var wsError = createWriteStream('error');

for (var i = 0; i < 100; i++) {
    ws1.write(String(i));
}
ws1.end();

for (var i = 0; i < 100; i++) {
    ws2.write(String(i));
}
ws2.destroy();

for (var i = 0; i < 100; i++) {
    wsError.write(String(i));
}
wsError.destroy();
