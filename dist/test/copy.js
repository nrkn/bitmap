"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const __1 = require("..");
const png_1 = require("../png");
const utils_1 = require("./fixtures/utils");
const patternPng = utils_1.pngFixture('pattern-5x5');
const patternSmallPng = utils_1.pngFixture('pattern-3x3');
const patternOutOfBoundsPng = utils_1.pngFixture('pattern-5x5-out-of-bounds');
describe('bitmap', () => {
    describe('copy', () => {
        it('from source dimensions', () => {
            const expect = png_1.fromPng(patternPng);
            const copied = __1.copy(expect);
            assert.deepEqual(copied, expect);
        });
        it('x, y, width, height', () => {
            const expect = png_1.fromPng(patternSmallPng);
            const pattern = png_1.fromPng(patternPng);
            const copied = __1.copy(pattern, 1, 1, 3, 3);
            assert.deepEqual(copied, expect);
        });
        it('ignores out of bounds', () => {
            const expect = png_1.fromPng(patternOutOfBoundsPng);
            const pattern = png_1.fromPng(patternPng);
            const copied = __1.copy(pattern, -1, -1);
            assert.deepEqual(copied, expect);
        });
    });
});
//# sourceMappingURL=copy.js.map