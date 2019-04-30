"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const line_1 = require("./line");
exports.pointsBoundingRect = (points) => {
    let left = Number.MAX_SAFE_INTEGER;
    let top = Number.MAX_SAFE_INTEGER;
    let right = Number.MIN_SAFE_INTEGER;
    let bottom = Number.MIN_SAFE_INTEGER;
    points.forEach(([x, y]) => {
        if (x < left)
            left = x;
        if (y < top)
            top = y;
        if (x > right)
            right = x;
        if (y > bottom)
            bottom = y;
    });
    return { top, right, bottom, left };
};
exports.triangleBoundingRect = (triangle) => exports.pointsBoundingRect(triangle);
exports.translatePoint = ([x, y], [tx, ty]) => [x + tx, y + ty];
exports.scalePoint = ([x, y], scale) => [x * scale, y * scale];
exports.translateTriangle = (t, translate) => t.map(p => exports.translatePoint(p, translate));
exports.scaleTriangle = (t, scale) => t.map(p => exports.scalePoint(p, scale));
exports.bitmapToPoints = (image, value = 1) => {
    const { width, height, data } = image;
    const points = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = y * width + x;
            if (data[index] === value)
                points.push([x, y]);
        }
    }
    return points;
};
exports.createPointSet = () => {
    const existing = new Set();
    const points = [];
    const add = (p) => {
        const key = JSON.stringify(p);
        if (existing.has(key))
            return;
        points.push(p);
        existing.add(key);
    };
    const has = (p) => existing.has(JSON.stringify(p));
    return { add, has, get points() { return points.slice(); } };
};
exports.addLineToSet = (set, [[x0, y0], [x1, y1]]) => {
    line_1.line(x0, y0, x1, y1).forEach(set.add);
};
exports.triangleCentroid = (t) => {
    const [[x0, y0], [x1, y1], [x2, y2]] = t;
    const cx = (x0 + x1 + x2) / 3;
    const cy = (y0 + y1 + y2) / 3;
    return [cx, cy];
};
//# sourceMappingURL=utils.js.map