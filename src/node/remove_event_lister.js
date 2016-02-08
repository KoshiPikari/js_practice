/**
 * @fileOverview
 */

var EventEmitter = require('events').EventEmitter;

var makeEventEmitter = function() {
    var ee = new EventEmitter();
    setTimeout(function() {
        ee.emit('open');
    }, 1000);
    setTimeout(function() {
        ee.emit('neverEmitted');
    }, 2000);
    return ee;
};

var ee = makeEventEmitter();

var removedFunction = function() {
    console.log(2);
};

ee.on('open', function() {
    console.log('1');
    ee.removeAllListeners('neverEmitted');
});

ee.on('neverEmitted', removedFunction);
