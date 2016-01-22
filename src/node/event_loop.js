/**
 * @fileOverview
 */

console.log('1');

function execCallback(callback) {
    process.nextTick(callback);
}

execCallback(function() {
    console.log(2);
});

process.nextTick(function() {
    console.log(3);
});

console.log(4);
