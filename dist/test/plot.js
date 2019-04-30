"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const __1 = require("..");
const line_1 = require("../line");
const plot_1 = require("../plot");
const png_1 = require("../png");
const utils_1 = require("./fixtures/utils");
const modes_1 = require("../modes");
const utils_2 = require("../utils");
const plotLinesPng = utils_1.pngFixture('plot-lines');
const ovalPng = utils_1.pngFixture('oval-15x15');
const plotLinesOvalXorPng = utils_1.pngFixture('plot-lines-oval-15x15-xor');
describe('bitmap', () => {
    describe('plot', () => {
        it('line', () => {
            const expect = png_1.fromPng(plotLinesPng);
            const image = __1.createBitmap(5, 5);
            const lines = line_1.line(0, 0, 4, 4).concat(line_1.line(0, 4, 4, 0));
            plot_1.plot(image, lines);
            assert.deepEqual(image, expect);
        });
        it('out of bounds', () => {
            const expect = png_1.fromPng(plotLinesPng);
            const image = __1.createBitmap(5, 5);
            const lines = line_1.line(-1, -1, 5, 5).concat(line_1.line(0, 4, 4, 0));
            plot_1.plot(image, lines);
            assert.deepEqual(image, expect);
        });
        it('mode', () => {
            const expect = png_1.fromPng(plotLinesOvalXorPng);
            const image = png_1.fromPng(ovalPng);
            const lines = line_1.line(0, 0, 14, 14).concat(line_1.line(0, 14, 14, 0));
            plot_1.plot(image, lines, modes_1.modes.xor);
            assert.deepEqual(image, expect);
        });
        it('round trips', () => {
            const expect = png_1.fromPng(plotLinesPng);
            const points = utils_2.bitmapToPoints(png_1.fromPng(plotLinesPng));
            const image = __1.createBitmap(expect.width, expect.height);
            plot_1.plot(image, points);
            assert.deepEqual(image, expect);
        });
    });
});
//# sourceMappingURL=plot.js.map