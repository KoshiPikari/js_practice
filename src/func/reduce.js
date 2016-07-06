/**
 * @fileOverview
 */

var _ = require('lodash')


var l = [1, 2, 3, 4, 5];
var even = l.reduce(function(a, b) {
    if (b % 2 === 0) {
        a.push(b);
        return a;
    }
    return a;
}, []);
console.log(even);

var even2 = _(l).reduce(function(a, b) {
    if (b % 2 === 0) {
        a.push(b);
        return a;
    }
    return a;
}, []);
console.log(even2);
