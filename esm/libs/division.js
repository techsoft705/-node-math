const division = (x, y) => {
    if (typeof x === 'number' && typeof y === 'number') {
        return x / y;
    }
    return new TypeError('parameter must be number');
};
export default division;
//# sourceMappingURL=division.js.map