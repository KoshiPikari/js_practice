/**
 * @fileOverview
 */

function Test() {

}

Test.prototype.methodA = function() {
    console.log('mehtodA');
};

Test.prototype.methodB = function() {
    this.methodA();
    console.log('methodB');
};

var t = new Test();

t.methodB();
