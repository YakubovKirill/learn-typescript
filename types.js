"use strict";
exports.__esModule = true;
exports.name = void 0;
var name = 'Kirill';
exports.name = name;
console.log(name);
var isLiggedIn = false;
console.log(isLiggedIn);
var age = 12;
console.log(age);
age = '23';
console.log(age);
var weigth = 85.2;
console.log(weigth);
var numArr = [1, 2, 3, 4, 5, 6];
var numArr2 = [1, 2, 3, 4, 5, 6];
var tuple = ['Kirill', 23];
var anyVar = 21;
console.log(anyVar);
anyVar = 'wer';
console.log(anyVar);
function print(name) {
    return (name === '') ? false : true;
}
console.log(print('kirill'));
console.log(print(''));
function printVoid(name) {
    console.log(name);
}
printVoid('Ivan');
// Never
var throwErr = function (message) {
    throw new Error(message);
};
var log = ['Kirill', 23, true];
