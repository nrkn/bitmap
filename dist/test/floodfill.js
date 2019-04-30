"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const line_1 = require("../line");
const __1 = require("..");
const plot_1 = require("../plot");
const png_1 = require("../png");
const utils_1 = require("./fixtures/utils");
const floodfill_1 = require("../floodfill");
const fill_1 = require("../fill");
const modes_1 = require("../modes");
const floodFillNonePng = utils_1.pngFixture('floodfill-none');
const floodFillPng = utils_1.pngFixture('floodfill-0-1');
const floodFillInversePng = utils_1.pngFixture('floodfill-1-0');
const floodFillComplexNonePng = utils_1.pngFixture('floodfill-complex-none');
const floodFillComplexPng = utils_1.pngFixture('floodfill-complex');
describe('bitmap', () => {
    describe('floodfill', () => {
        const start = 1;
        const end = 9;
        const center = 5;
        const lines = [
            ...line_1.line(center, start, end, center),
            ...line_1.line(end, center, center, end),
            ...line_1.line(center, end, start, center),
            ...line_1.line(start, center, center, start)
        ];
        it('ignores when from and to are same', () => {
            const expect = png_1.fromPng(floodFillNonePng);
            const image = __1.createBitmap(11, 11);
            plot_1.plot(image, lines);
            floodfill_1.floodFillImage(image, center, center, 0);
            assert.deepEqual(image, expect);
        });
        it('fills 0 with 1 by default', () => {
            const expect = png_1.fromPng(floodFillPng);
            const image = __1.createBitmap(11, 11);
            plot_1.plot(image, lines);
            floodfill_1.floodFillImage(image, center, center);
            assert.deepEqual(image, expect);
        });
        it('fills 1 with 0', () => {
            const expect = png_1.fromPng(floodFillInversePng);
            const image = __1.createBitmap(11, 11);
            fill_1.fill(image, 1);
            plot_1.plot(image, lines, modes_1.modes.false);
            floodfill_1.floodFillImage(image, center, center, 0);
            assert.deepEqual(image, expect);
        });
        it('complex', () => {
            const expect = png_1.fromPng(floodFillComplexPng);
            const image = png_1.fromPng(floodFillComplexNonePng);
            floodfill_1.floodFillImage(image, 21, 21);
            assert.deepEqual(image, expect);
        });
    });
});
//# sourceMappingURL=floodfill.js.map