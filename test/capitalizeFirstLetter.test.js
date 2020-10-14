const assert = require('assert');
const capitalizeFirstLetter = require('../capitalizeFirstLetter');


describe('capitalizeFirst', () => {
    it('is a function accepting one argument', () => {
assert.strictEqual(typeof capitalizeFirstLetter, 'function');
assert.strictEqual(capitalizeFirstLetter.length, 1);
});

it('transforms one sentence correctly', () => {
assert.strictEqual(capitalizeFirstLetter('i learn TDD and it\'s very cool'), 'I Learn TDD And It\'s Very Cool');
});

it('transforms one word correctly', () => {
assert.strictEqual(capitalizeFirstLetter('motivation'), 'Motivation');
});

it('works with a 1-character string', () => {
assert.strictEqual(capitalizeFirstLetter('a'), 'A');
});

it('works with an empty string', () => {
assert.strictEqual(capitalizeFirstLetter(''), '');
});
});