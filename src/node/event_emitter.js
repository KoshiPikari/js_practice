/**
 * @fileOverview
 */

var EventEmitter = require('events').EventEmitter;

var makeEventEmitter = function() {
    var eventEmitter = new EventEmitter();
    setTimeout(function() {
        eventEmitter.emit('greed', 'hello', 'world');
    }, 1000);
    eventEmitter.setTimeout(2000);
    return eventEmitter;
};

var ee = makeEventEmitter();
ee.on('greed', function(arg1, arg2) {
    console.log(arg1, arg2);
});

ee.on('greed', function() {
    console.log('other.');
});

ee.on('timeout', function() {
    console.log('timeout');
});
