/**
 * @fileOverview
 */

function execIfTrue(canExec, callback) {
    process.nextTick(function() {
        if (canExec) {
            callback();
        }
    });
}

function execIfTrueNoNexttick(canExec, callback) {
    if (canExec) {
        callback();
    }
}

console.log('execIfTrue 1');
execIfTrue(true, function() {
    console.log('execIfTrue 3');
});
console.log('execIfTrue 2');


console.log('execIfTrueNoNexttick 1');
execIfTrueNoNexttick(true, function() {
    console.log('execIfTrueNoNexttick 2');
});
console.log('execIfTrueNoNexttick 3');
