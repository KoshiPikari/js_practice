/**
 * @fileOverview
 */

var fs = require('fs');
var EventEmitter = require('events').EventEmitter;

var wsList = [];

var createWriteStream = function(name) {
    var options = {encoding: 'utf8'};
    var ws = fs.createWriteStream('./' + name + '.txt', options);
    wsList.push(name);
    ws.on('open', function() {
        console.log('open');
    });
    ws.on('error', function(exception) {
        console.log(exception);
    });
    ws.on('close', function() {
        console.log('close');
    });
};

var ws1 = createWriteStream('ws');
var ws2 = createWriteStream('ws2');

