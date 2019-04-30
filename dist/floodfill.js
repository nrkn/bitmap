"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.floodFillImage = (image, x, y, to = 1) => {
    x = x | 0;
    y = y | 0;
    const { width, height } = image;
    const from = image.data[y * width + x];
    if (from === to)
        return;
    const canFlood = ([dx, dy]) => image.data[dy * width + dx] === from;
    const onFlood = ([dx, dy]) => image.data[dy * width + dx] = to;
    exports.floodFill(x, y, width, height, canFlood, onFlood);
};
exports.floodFill = (x, y, width, height, canFlood, onFlood) => {
    x = x | 0;
    y = y | 0;
    let x1;
    let isAbove;
    let isBelow;
    const stack = [[x, y]];
    const pop = () => {
        if (stack.length > 0) {
            [x, y] = stack.pop();
            return true;
        }
        return false;
    };
    while (pop()) {
        x1 = x;
        while (x1 >= 0 && canFlood([x1, y]))
            x1--;
        x1++;
        isAbove = isBelow = false;
        while (x1 < width && canFlood([x1, y])) {
            onFlood([x1, y]);
            if (!isAbove && y > 0 && canFlood([x1, y - 1])) {
                stack.push([x1, y - 1]);
                isAbove = true;
            }
            else if (isAbove && y > 0 && !canFlood([x1, y - 1])) {
                isAbove = false;
            }
            if (!isBelow && y < height - 1 && canFlood([x1, y + 1])) {
                stack.push([x1, y + 1]);
                isBelow = true;
            }
            else if (isBelow && y < height - 1 && !canFlood([x1, y + 1])) {
                isBelow = false;
            }
            x1++;
        }
    }
};
//# sourceMappingURL=floodfill.js.map