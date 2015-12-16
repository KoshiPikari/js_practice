var async = require('async');

var longList = [];
for (var i = 0; i < 5000; i++) {
    longList.push(i);
}

async.series([
    function(next) {
        async.eachSeries(longList, function(element, next) {
            if (element % 1000 === 0) {
                console.log(element);
            }
            async.nextTick(next);
        }, function(err) {
            next(err);
        });
    }, function(next) {
        async.eachSeries(longList, function(element, next) {
            if (element % 1000 === 0) {
                console.log(element);
            }
            // RangeError: Maximum call stack size exceeded
            next();
        }, function(err) {
            next(err);
        });
    }
], function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('success.');
});
