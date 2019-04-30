"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const png_1 = require("../png");
const oval_1 = require("../oval");
const utils_1 = require("./fixtures/utils");
const __1 = require("..");
const plot_1 = require("../plot");
const name = (width, height, start, end, anticlockwise = false) => {
    const prefix = `oval-${width}x${height}`;
    let suffix = '';
    if (start !== undefined && end !== undefined) {
        suffix = `-arc-${start}-${end}`;
        if (anticlockwise)
            suffix += '-anticlockwise';
    }
    return prefix + suffix;
};
describe('bitmap', () => {
    describe('oval', () => {
        it('full oval', () => {
            const sizes = [
                [1, 1],
                [3, 1],
                [4, 4],
                [6, 9],
                [8, 8],
                [3, 15],
                [15, 15]
            ];
            sizes.forEach(([width, height]) => {
                const expectPng = utils_1.pngFixture(name(width, height));
                const expect = png_1.fromPng(expectPng);
                const image = __1.createBitmap(width, height);
                plot_1.plot(image, oval_1.oval(width, height));
                assert.deepEqual(image, expect);
            });
        });
        it('arc', () => {
            const width = 15;
            const height = 11;
            const angleToRadian = angle => angle * (Math.PI / 180);
            const arcs = [
                [0, 0],
                [0, 45],
                [0, 45, true],
                [0, 180],
                [180, 135],
                [0, 315],
                [315, 0]
            ];
            arcs.forEach(([start, end, anticlockwise = false]) => {
                const png = utils_1.pngFixture(name(width, height, start, end, anticlockwise));
                const expect = png_1.fromPng(png);
                const startRadians = angleToRadian(start);
                const endRadians = angleToRadian(end);
                const image = __1.createBitmap(width, height);
                plot_1.plot(image, oval_1.oval(width, height, startRadians, endRadians, anticlockwise));
                assert.deepEqual(image, expect);
            });
        });
        it('inOvalArc', () => {
            assert(oval_1.inOvalArc(1, 1, 5, 5, Math.PI, Math.PI * 1.5, false));
            assert(!oval_1.inOvalArc(4, 4, 5, 5, Math.PI, Math.PI * 1.5, false));
            assert(oval_1.inOvalArc(1, 1, 5, 5, Math.PI * -6, Math.PI * -6.1, false));
        });
    });
});
//# sourceMappingURL=oval.js.map