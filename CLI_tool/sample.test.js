const test = require('node:test');
const assert = require('node:assert');

// これ一つがテストケース
test('1 + 2 = 3', () => {
    assert.strictEqual(1 + 2, 3, '1 + 2が3になる');
});

test('1 + 2 = 4', () => {
    assert.strictEqual(1 + 2, 4, '1 + 2が4になる');
});