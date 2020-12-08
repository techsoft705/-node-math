"use strict";
exports.__esModule = true;
exports.multiplication = void 0;
var multiplication = function (x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x * y;
    }
    return new TypeError('parameter must be number');
};
exports.multiplication = multiplication;
