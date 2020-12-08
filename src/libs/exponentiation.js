"use strict";
exports.__esModule = true;
exports.exponentiation = void 0;
var exponentiation = function (x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return Math.pow(x, y);
    }
    return new TypeError('parameter must be number');
};
exports.exponentiation = exponentiation;
