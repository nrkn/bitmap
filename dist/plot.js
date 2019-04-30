"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modes_1 = require("./modes");
exports.plot = (image, points, mode = modes_1.modes.q) => {
    const { width, height } = image;
    points.forEach(([x, y]) => {
        x = x | 0;
        y = y | 0;
        if (x < 0 || y < 0 || x >= width || y >= height)
            return;
        const index = y * width + x;
        image.data[index] = mode(image.data[index], 1);
    });
};
//# sourceMappingURL=plot.js.map