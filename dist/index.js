"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var copy_1 = require("./copy");
exports.copy = copy_1.copy;
var fill_1 = require("./fill");
exports.fill = fill_1.fill;
var line_1 = require("./line");
exports.line = line_1.line;
var modes_1 = require("./modes");
exports.modes = modes_1.modes;
var oval_1 = require("./oval");
exports.oval = oval_1.oval;
var paste_1 = require("./paste");
exports.paste = paste_1.paste;
var plot_1 = require("./plot");
exports.plot = plot_1.plot;
var png_1 = require("./png");
exports.fromPng = png_1.fromPng;
exports.toPng = png_1.toPng;
var resize_1 = require("./resize");
exports.resize = resize_1.resize;
var triangle_1 = require("./triangle");
exports.triangle = triangle_1.triangle;
exports.createBitmap = (width, height, data) => {
    if (width === undefined || height === undefined) {
        throw TypeError('Not enough arguments');
    }
    width = width | 0;
    height = height | 0;
    if (width < 1 || height < 1) {
        throw TypeError('Index or size is negative or greater than the allowed amount');
    }
    const length = width * height;
    if (data === undefined) {
        data = new Array(length).fill(0);
    }
    if (Array.isArray(data)) {
        if (data.length !== length) {
            throw TypeError('Index or size is negative or greater than the allowed amount');
        }
        data = data.map(n => n ? 1 : 0);
        return {
            get width() { return width; },
            get height() { return height; },
            get data() { return data; }
        };
    }
    throw TypeError('Expected data to be array or undefined');
};
exports.clone = (bitmap) => exports.createBitmap(bitmap.width, bitmap.height, bitmap.data);
//# sourceMappingURL=index.js.map