/**
 * @fileOverview
 */

var intervalObj = {};
intervalObj.intervalHello = setInterval(function() {
    console.log('hello');
}, 100);

setTimeout(function() {
    if (intervalObj.intervalHello.ontimeout instanceof Function) {
        clearTimeout(intervalObj.intervalHello);
    }
    // Following two statement don't make sense.
    // delete intervalObj.intervalHello;
    // interbalObj.interbalHello = null;
    console.log('stop');
}, 3000);