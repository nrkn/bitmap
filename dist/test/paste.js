"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const utils_1 = require("./fixtures/utils");
const png_1 = require("../png");
const __1 = require("..");
const paste_1 = require("../paste");
const modes_1 = require("../modes");
const patternPng = utils_1.pngFixture('pattern-5x5');
const patternSmallPng = utils_1.pngFixture('pattern-3x3');
const ovalPng = utils_1.pngFixture('oval-15x15');
const patternOvalXorPng = utils_1.pngFixture('pattern-5x5-oval-15x15-xor');
describe('bitmap', () => {
    describe('paste', () => {
        it('paste', () => {
            const expect = png_1.fromPng(patternPng);
            const pattern = png_1.fromPng(patternPng);
            const target = __1.createBitmap(5, 5);
            paste_1.paste(pattern, target);
            assert.deepEqual(target, expect);
        });
        it('paste out of bounds', () => {
            const expect = png_1.fromPng(patternSmallPng);
            const pattern = png_1.fromPng(patternPng);
            const target = __1.createBitmap(3, 3);
            paste_1.paste(pattern, target, -1, -1);
            assert.deepEqual(target, expect);
        });
        it('paste mode', () => {
            const expect = png_1.fromPng(patternOvalXorPng);
            const pattern = png_1.fromPng(patternPng);
            const oval = png_1.fromPng(ovalPng);
            for (let y = 0; y < 3; y++) {
                const dy = y * 5;
                for (let x = 0; x < 3; x++) {
                    const dx = x * 5;
                    paste_1.paste(pattern, oval, dx, dy, modes_1.modes.xor);
                }
            }
            assert.deepEqual(oval, expect);
        });
    });
});
//# sourceMappingURL=paste.js.map