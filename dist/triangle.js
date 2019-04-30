"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const floodfill_1 = require("./floodfill");
exports.triangle = (triangle) => {
    const { right, bottom } = utils_1.triangleBoundingRect(triangle);
    const pointSet = utils_1.createPointSet();
    const [t0, t1, t2] = triangle;
    utils_1.addLineToSet(pointSet, [t0, t1]);
    utils_1.addLineToSet(pointSet, [t1, t2]);
    utils_1.addLineToSet(pointSet, [t2, t0]);
    // add reversed lines too, for symmetry
    utils_1.addLineToSet(pointSet, [t1, t0]);
    utils_1.addLineToSet(pointSet, [t2, t1]);
    utils_1.addLineToSet(pointSet, [t0, t2]);
    const canFlood = p => !pointSet.has(p);
    const onFlood = p => pointSet.add(p);
    const [cx, cy] = utils_1.triangleCentroid(triangle);
    floodfill_1.floodFill(cx, cy, right, bottom, canFlood, onFlood);
    return pointSet.points;
};
//# sourceMappingURL=triangle.js.map