const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
    it('Rectangle is a Rectangle?', () => {
        const rectangle = new Rectangle(10, 45);
        assert.strictEqual(rectangle.isSquare(), false)
    });
    it('Rectangle is a Square?', () => {
       const rectangle1 = new Rectangle(10, 10);
        assert.strictEqual(rectangle1.isSquare(), true)
    });

    it('calculate the area', () => {
        const rectangle = new Rectangle(13, 7);
        assert.strictEqual(rectangle.getArea(), 91)
    })

    it('calculate perimeter', () => {
        const rectangle = new Rectangle(5, 10);
        assert.strictEqual(rectangle.getPerimeter(), 30)
    })
    });