const addition = (x, y) => {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    return new TypeError('parameter must be number');
};
export default addition;
//# sourceMappingURL=addition.js.map