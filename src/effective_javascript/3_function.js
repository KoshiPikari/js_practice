'use strict';

/*
## S20 カスタムレシーバ付きでメソッドを呼び出すには call を使う
+ call メソッドをつかうケースを3パターン挙げよ
 */

// - レシーバを指定して関数を呼び出したい時

function printThisName() {
    console.log(this.name);
}

var thing = {name: 'name'};
printThisName.call(thing);

// - 相手のオブジェクトに存在しないかもしれないメソッドを呼び出すとき

let dict = {key1: 1, key2: 2};
delete dict.hasOwnProperty;
var hasOwnProperty = {}.hasOwnProperty;
console.log(hasOwnProperty.call(dict, 'key1'));
console.log(hasOwnProperty.call(dict, 'hasOwnProperty'));

// - レシーバオブジェクトと関数を外部から渡す関数を定義したい時

class Table {
    constructor(entries) {
        this.entries = entries || [];
    }

    addEntry(value) {
        this.entries.push({key: value});
    }

    forEach(f, thisArg) {
        console.log(this.entries);
        this.entries.forEach(entry => f.call(thisArg, entry.key));
    }
}

let t1 = new Table([{key: 1}, {key: 2}]);
let t2 = new Table();

t1.forEach(t2.addEntry, t2);
console.log(t2.entries); // table entries がコピーされている。

/*
## S21
 */

function average() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum / arguments.length;
}

console.log(average(1, 2, 3, 4));

var ary = [1, 2, 3, 4];
console.log(average.apply(null, ary));