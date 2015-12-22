/**
 * @fileOverview
 */

var async = require('async');

function noCallbackReturn(i, callback) {
    if (i > 1) {
        callback('error');
        return;
    }
    callback(null, 1);
}

var list = [0, 1, 2, 3, 4];

async.eachSeries(list, function(element, next) {
    console.log(element);
    noCallbackReturn(element, next);
}, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('finish.');
});
