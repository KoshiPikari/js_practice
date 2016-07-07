'use strict';

/**
 * ## S2 JavaScript の浮動小数点を理解しよう
 * - JS は全ての数が倍精度浮動小数点数
 * - -2^53~-2^53 まで表現可能
 * - 数値型のtoString
 */
console.log(8|1); // OR演算
console.log((8).toString(2)); // 2進表現
console.log(parseInt('1001', 2));
console.log(0.1 + 0.2); // 浮動小数点の限界

/**
 * ## S3 暗黙の型変換に注意しよう
 * - isNaN の作り方
 */
let x = NaN;
console.log(x === NaN); // false になる！

const isReallyNaN = (x) => {
    return x !== x;
}

console.log(isReallyNaN(x));
