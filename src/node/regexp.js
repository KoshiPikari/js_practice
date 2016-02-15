/**
 * Created by a13898 on 2015/12/20.
 */

var str = 'aaa_bbb';

var myArray = /(a+)_(b+)/g.exec(str);
console.log(JSON.stringify(myArray, null, 2));

var reverseStr = myArray[2] + '_' + myArray[1];
console.log('reverse', reverseStr);

var regexp = new RegExp('(a+)_(b+)', 'g');
var myArray2 = regexp.exec(str);
console.log(JSON.stringify(myArray2, null, 2));

var str2 = 'aaa';
var regexp2 = new RegExp('(a+)(?:_b+)?');
console.log(JSON.stringify(regexp2.exec(str2)));
console.log(JSON.stringify(regexp2.exec(str)));