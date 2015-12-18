/**
 * @fileOverview
 */

function noCallbackReturn(callback) {
    console.log('1');
    callback();
    console.log('2');
    callback();
    console.log('3');
}

noCallbackReturn(function(){
   console.log('callback');
});

function mayNotcallback(condition, callback) {
    console.log(condition);
    if (condition) {
        callback();
    }
}