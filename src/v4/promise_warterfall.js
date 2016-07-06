/**
 * @fileOverview
 */

Promise.resolve()
    .then(function() {
        return new Promise(function(fulfilled, rejected) {
            setTimeout(function() {
                console.log('foo');
                fulfilled('aaa');
            }, 1000);
        });
    })
    .then(function(ret) {
        if (ret === 'aaa') {
            return new Promise(function(fulfiled) {
                fulfiled('xxx');
            });
        } else {
            return new Promise(function(fulfiled, rejeected) {
                setTimeout(function() {
                    console.log('bar');
                    fulfiled('bbb');
                }, 1000);
            });
        }
    })
    .then(function(result) {
        console.log(result);
    })
    .catch(function(err) {
        console.log(err);
    });