"use strict";
exports.__esModule = true;
exports.subtraction = void 0;
var subtraction = function (x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x - y;
    }
    return new TypeError('parameter must be number');
};
exports.subtraction = subtraction;
