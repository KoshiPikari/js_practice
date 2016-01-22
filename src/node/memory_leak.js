/**
 * @fileOverview
 */

var agent = require('webkit-devtools-agent');

function maybeMemoryLeak(condition, callback) {
    process.nextTick(function() {
        if (condition) {
            callback();
        }
    });
}

setInterval(function() {
    var x = 0;
    maybeMemoryLeak(false, function() {
        x++;
    });
}, 1);

setInterval(function() {
    gc(); // 0.5秒毎に明示的にGC起動(要 --expose-gc オプション)
}, 500);

setInterval(function() {
    var status = process.memoryUsage();
    console.log(status.rss + ',' + status.heapTotal + ',' + status.heapUsed);
}, 5000);
