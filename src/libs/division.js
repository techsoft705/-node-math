"use strict";
exports.__esModule = true;
exports.division = void 0;
var division = function (x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x / y;
    }
    return new TypeError('parameter must be number');
};
exports.division = division;
