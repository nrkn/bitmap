"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const oval_1 = require("../oval");
const resize_1 = require("../resize");
const utils_1 = require("./fixtures/utils");
const png_1 = require("../png");
const __1 = require("..");
const plot_1 = require("../plot");
describe('bitmap', () => {
    const circlePoints = oval_1.oval(15, 15);
    const circle = __1.createBitmap(15, 15);
    plot_1.plot(circle, circlePoints);
    const sizes = [
        [8, 6],
        [15, 15],
        [5, 25],
        [25, 25]
    ];
    describe('resize', () => {
        sizes.forEach(([width, height]) => {
            it(`15x15 -> ${width}x${height}`, () => {
                const expect = png_1.fromPng(utils_1.pngFixture(`resized-${width}x${height}`));
                const image = resize_1.resize(circle, width, height);
                assert.deepEqual(expect, image);
            });
        });
    });
});
//# sourceMappingURL=resize.js.map