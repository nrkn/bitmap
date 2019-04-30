"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modes_1 = require("./modes");
exports.fill = (source, value = 1, mode = modes_1.modes.q) => {
    const { width, height } = source;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const sourceIndex = y * width + x;
            source.data[sourceIndex] = mode(source.data[sourceIndex], value);
        }
    }
};
//# sourceMappingURL=fill.js.map