"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oval = (width, height, startRadians = 0, endRadians = 0, anticlockwise = false) => {
    const points = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const isInside = exports.inOvalArc(x, y, width, height, startRadians, endRadians, anticlockwise);
            if (isInside) {
                points.push([x, y]);
            }
        }
    }
    return points;
};
exports.inOvalArc = (x, y, width, height, startRadians, endRadians, anticlockwise) => {
    const xStep = 1 / width;
    const yStep = 1 / height;
    const xOff = 1 / (width * 2);
    const yOff = 1 / (height * 2);
    const xNormal = xStep * x + xOff;
    const yNormal = yStep * y + yOff;
    const dX = xNormal - 0.5;
    const dY = yNormal - 0.5;
    if (startRadians !== endRadians) {
        const theta = Math.atan2(dY, dX) * (anticlockwise ? -1 : 1);
        if (!between(startRadians, endRadians, theta))
            return false;
    }
    const dist = Math.hypot(dX, dY);
    return dist <= 0.5;
};
const pi2 = Math.PI * 2;
const between = (start, end, mid) => {
    end = normalize(end - start);
    mid = normalize(mid - start);
    return mid <= end;
};
const normalize = (radians) => {
    while (radians < 0)
        radians += pi2;
    while (radians > pi2)
        radians -= pi2;
    return radians;
};
//# sourceMappingURL=oval.js.map