const sum = require('./sum');

test('adds 5 + 2 to equal 7', () => {
    expect(sum(5, 2)).toBe(7);
});
