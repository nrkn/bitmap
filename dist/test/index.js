"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs_1 = require("fs");
const __1 = require("..");
const png_1 = require("../png");
const utils_1 = require("./fixtures/utils");
describe('bitmap', () => {
    describe('createBitmap', () => {
        it('creates a bitmap image', () => {
            const expectPng = utils_1.pngFixture('empty');
            const expect = png_1.fromPng(expectPng);
            const image = __1.createBitmap(5, 5);
            assert.deepEqual(image, expect);
        });
        it('creates a bitmap from data', () => {
            const expectPng = utils_1.pngFixture('pattern-5x5');
            const expect = png_1.fromPng(expectPng);
            const data = [
                1, 1, 1, 1, 1,
                1, 0, 0, 0, 1,
                1, 0, 1, 0, 1,
                1, 0, 0, 0, 1,
                1, 1, 1, 1, 1
            ];
            const image = __1.createBitmap(5, 5, data);
            assert.deepEqual(image, expect);
        });
        it('clones', () => {
            const expectPatternPng = fs_1.readFileSync('./src/test/fixtures/pattern-5x5.png');
            const expectPattern = png_1.fromPng(expectPatternPng);
            const expectEmptyPng = utils_1.pngFixture('empty');
            const expectEmpty = png_1.fromPng(expectEmptyPng);
            const pattern = png_1.fromPng(expectPatternPng);
            const cloned = __1.clone(pattern);
            for (let i = 0; i < cloned.data.length; i++) {
                cloned.data[i] = 0;
            }
            assert.deepEqual(pattern, expectPattern);
            assert.deepEqual(cloned, expectEmpty);
        });
        it('Expected data to be array or undefined', () => {
            const create = __1.createBitmap;
            assert.throws(() => {
                create(5, 5, 'foo');
            }, {
                message: 'Expected data to be array or undefined'
            });
        });
        it('Not enough arguments', () => {
            const create = __1.createBitmap;
            assert.throws(() => {
                create();
            }, {
                message: 'Not enough arguments'
            });
            assert.throws(() => {
                create(5);
            }, {
                message: 'Not enough arguments'
            });
        });
        it('Index or size is negative or greater than the allowed amount', () => {
            assert.throws(() => {
                __1.createBitmap(-5, 5);
            }, {
                message: 'Index or size is negative or greater than the allowed amount'
            });
            assert.throws(() => {
                __1.createBitmap(5, -5);
            }, {
                message: 'Index or size is negative or greater than the allowed amount'
            });
            assert.throws(() => {
                __1.createBitmap(5, 5, [1, 1, 1]);
            }, {
                message: 'Index or size is negative or greater than the allowed amount'
            });
        });
    });
});
//# sourceMappingURL=index.js.map