"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const __1 = require("..");
const utils_1 = require("./fixtures/utils");
const png_1 = require("../png");
const patternPng = utils_1.pngFixture('pattern-5x5');
const patternAlphaPng = utils_1.pngFixture('pattern-5x5-alpha');
describe('bitmap', () => {
    describe('png', () => {
        describe('fromPng', () => {
            it('default mapper', () => {
                const expect = png_1.fromPng(patternPng);
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
        });
        describe('toPng', () => {
            it('defaultMapper', () => {
                const expect = png_1.fromPng(patternPng);
                const image = png_1.fromPng(png_1.toPng(expect));
                assert.deepEqual(image, expect);
            });
        });
        describe('mappers', () => {
            it('custom mappers', () => {
                const expect = png_1.fromPng(patternPng);
                const pattern = png_1.fromPng(patternPng);
                const toRgba = bit => [255, 255, 255, bit ? 255 : 0];
                const toBit = (_r, _g, _b, a) => a > 127 ? 1 : 0;
                const png = png_1.toPng(pattern, toRgba);
                const image = png_1.fromPng(png, toBit);
                assert.deepEqual(image, expect);
            });
        });
    });
});
//# sourceMappingURL=png.js.map