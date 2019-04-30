"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pngjs_1 = require("pngjs");
const _1 = require(".");
exports.defaultRgbaToBit = (r, g, b, _a) => {
    const value = (r + g + b) / 3;
    return value > 127 ? 1 : 0;
};
exports.defaultBitToRgba = bit => {
    const r = bit ? 255 : 0;
    const g = bit ? 255 : 0;
    const b = bit ? 255 : 0;
    const a = 255;
    return [r, g, b, a];
};
exports.fromPng = (pngBuffer, mapper = exports.defaultRgbaToBit) => {
    const png = pngjs_1.PNG.sync.read(Buffer.from(pngBuffer));
    const { width, height, data } = png;
    const pngData = new Uint8ClampedArray(data);
    const bitmap = _1.createBitmap(width, height);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = y * width + x;
            const sourceIndex = index * 4;
            const r = pngData[sourceIndex];
            const g = pngData[sourceIndex + 1];
            const b = pngData[sourceIndex + 2];
            const a = pngData[sourceIndex + 3];
            bitmap.data[index] = mapper(r, g, b, a);
        }
    }
    return bitmap;
};
exports.toPng = (imageData, mapper = exports.defaultBitToRgba) => {
    const { width, height, data } = imageData;
    const options = { width, height };
    const png = new pngjs_1.PNG(options);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = y * width + x;
            const destIndex = index * 4;
            const [r, g, b, a] = mapper(data[index]);
            png.data[destIndex] = r;
            png.data[destIndex + 1] = g;
            png.data[destIndex + 2] = b;
            png.data[destIndex + 3] = a;
        }
    }
    return new Uint8Array(pngjs_1.PNG.sync.write(png));
};
//# sourceMappingURL=png.js.map