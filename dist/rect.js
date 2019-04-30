"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSize = (rect) => {
    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;
    return { width, height };
};
//# sourceMappingURL=rect.js.map