"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modes_1 = require("./modes");
exports.paste = (source, dest, dx = 0, dy = 0, mode = modes_1.modes.q) => {
    const { width, height } = source;
    dx = dx | 0;
    dy = dy | 0;
    for (let y = 0; y < height; y++) {
        const destY = dy + y;
        if (destY < 0 || destY >= dest.height)
            continue;
        for (let x = 0; x < width; x++) {
            const destX = dx + x;
            if (destX < 0 || destX >= dest.width)
                continue;
            const sourceIndex = y * source.width + x;
            const destIndex = destY * dest.width + destX;
            dest.data[destIndex] = mode(dest.data[destIndex], source.data[sourceIndex]);
        }
    }
};
//# sourceMappingURL=paste.js.map