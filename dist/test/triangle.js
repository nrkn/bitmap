"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const triangle_1 = require("../triangle");
const utils_1 = require("../utils");
const __1 = require("..");
const plot_1 = require("../plot");
const utils_2 = require("./fixtures/utils");
const png_1 = require("../png");
describe('bitmap', () => {
    describe('triangle', () => {
        let triangles = [
            [
                [2, 0], [0, 4], [4, 4]
            ],
            [
                [0, 0], [0, 4], [4, 4]
            ],
            [
                [2, 0], [1, 4], [2, 4]
            ],
            [
                [2, 0], [1, 1], [2, 1]
            ],
            [
                [2, 0], [1, 4], [3, 4]
            ]
        ];
        triangles = triangles.map(t => utils_1.translateTriangle(utils_1.scaleTriangle(t, 3), [1, 1]));
        const name = (t) => {
            const id = t.map(p => p.join('_')).join('-');
            return `triangle-${id}`;
        };
        triangles.forEach(t => {
            it(JSON.stringify(t), () => {
                const expect = png_1.fromPng(utils_2.pngFixture(name(t)));
                const points = triangle_1.triangle(t);
                const image = __1.createBitmap(16, 16);
                plot_1.plot(image, points);
                assert.deepEqual(image, expect);
            });
        });
    });
});
//# sourceMappingURL=triangle.js.map