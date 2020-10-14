const assert = require('assert');

assert.strictEqual(typeof capitalizeFirstLetter, 'function');

assert.strictEqual(capitalizeFirstLetter.length, 1);

assert.strictEqual(capitalizeFirstLetter('i learn TDD and it\'s very cool'), 'I Learn TDD And It\'s Very Cool');

assert.strictEqual(capitalizeFirstLetter('motivation'), 'Motivation');

assert.strictEqual(capitalizeFirstLetter('a'), 'A');

assert.strictEqual(capitalizeFirstLetter(''), '');

