/**
 * Created by a13898 on 2016/02/15.
 */

var p1 = new Promise(function(resolve, reject) {
    //resolve(1);
    reject(new Error('test'));
});

p1.then(function(value) {
    console.log(value);
    return value + 2;
}).then(function(value) {
    console.log(value);
    throw new Error(value)
}).catch(function(err) {
    console.log(err);
});
