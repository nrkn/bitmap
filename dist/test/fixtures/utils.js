"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.pngFixturePath = (name) => `./src/test/fixtures/${name}.png`;
exports.pngFixture = (name) => fs_1.readFileSync(exports.pngFixturePath(name));
//# sourceMappingURL=utils.js.map