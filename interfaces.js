"use strict";
exports.__esModule = true;
var redCarRenault = {
    id: 23456,
    color: 'Red',
    size: {
        width: 2000,
        heigth: 1500,
        length: 3680
    }
};
console.log(redCarRenault);
var bigRedTruck = {
    id: 234567,
    size: {
        width: 2000,
        heigth: 3000,
        length: 6080
    },
    truckSize: 6000,
    beep: function () { console.log('Huge beeeeep !'); }
};
bigRedTruck.beep();
var css = {
    display: 'flex',
    border: '1px solid black',
    "true": 'yes'
};
var cssOMG = {
    "true": true,
    26: 345,
    12345: false
};
console.log(cssOMG["true"]);
