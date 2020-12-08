"use strict";
exports.__esModule = true;
exports.addition = void 0;
var addition = function (x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    return new TypeError('parameter must be number');
};
exports.addition = addition;
