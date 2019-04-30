"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const __1 = require("..");
const png_1 = require("../png");
const fill_1 = require("../fill");
const modes_1 = require("../modes");
const utils_1 = require("./fixtures/utils");
const filledPng = utils_1.pngFixture('filled');
const patternPng = utils_1.pngFixture('pattern-5x5');
const xorPng = utils_1.pngFixture('pattern-5x5-xor-1');
describe('bitmap', () => {
    describe('fill', () => {
        it('fills with 1', () => {
            const expect = png_1.fromPng(filledPng);
            const image = __1.createBitmap(5, 5);
            fill_1.fill(image);
            assert.deepEqual(image, expect);
        });
        it('uses mode', () => {
            const expect = png_1.fromPng(xorPng);
            const image = png_1.fromPng(patternPng);
            fill_1.fill(image, 1, modes_1.modes.xor);
            assert.deepEqual(image, expect);
        });
    });
});
//# sourceMappingURL=fill.js.map