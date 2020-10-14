const assert = require('assert');

function capitalizeFirstLetter(input) {
    return input.length > 0 ? 
    input.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ") : "";
}

assert.strictEqual(typeof capitalizeFirstLetter, 'function');

assert.strictEqual(capitalizeFirstLetter.length, 1);

assert.strictEqual(capitalizeFirstLetter('i learn TDD and it\'s very cool'), 'I Learn TDD And It\'s Very Cool');

assert.strictEqual(capitalizeFirstLetter('motivation'), 'Motivation');

assert.strictEqual(capitalizeFirstLetter('a'), 'A');

assert.strictEqual(capitalizeFirstLetter(''), '');

