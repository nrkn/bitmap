"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const modes_1 = require("../modes");
describe('bitmap', () => {
    describe('modes', () => {
        const inputs = [
            [1, 1], [1, 0], [0, 1], [0, 0]
        ];
        const expects = {
            and: [
                1, 0, 0, 0
            ],
            nand: [
                0, 1, 1, 1
            ],
            or: [
                1, 1, 1, 0
            ],
            nor: [
                0, 0, 0, 1
            ],
            xor: [
                0, 1, 1, 0
            ],
            xnor: [
                1, 0, 0, 1
            ],
            p: [
                1, 1, 0, 0
            ],
            q: [
                1, 0, 1, 0
            ],
            notP: [
                0, 0, 1, 1
            ],
            notQ: [
                0, 1, 0, 1
            ],
            true: [
                1, 1, 1, 1
            ],
            false: [
                0, 0, 0, 0
            ]
        };
        const modeNames = Object.keys(modes_1.modes);
        modeNames.forEach(name => {
            it(name, () => {
                const expect = expects[name];
                const result = inputs.map(bits => modes_1.modes[name](...bits));
                assert.deepEqual(result, expect);
            });
        });
    });
});
//# sourceMappingURL=modes.js.map