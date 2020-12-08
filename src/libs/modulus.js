"use strict";
exports.__esModule = true;
exports.modulus = void 0;
var modulus = function (x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x % y;
    }
    return new TypeError('parameter must be number');
};
exports.modulus = modulus;
