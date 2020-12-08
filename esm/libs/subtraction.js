const subtraction = (x, y) => {
    if (typeof x === 'number' && typeof y === 'number') {
        return x - y;
    }
    return new TypeError('parameter must be number');
};
export default subtraction;
//# sourceMappingURL=subtraction.js.map