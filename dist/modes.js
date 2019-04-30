"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.not = p => p ? 0 : 1;
exports.modes = {
    and: (p, q) => p && q ? 1 : 0,
    nand: (p, q) => exports.not(exports.modes.and(p, q)),
    or: (p, q) => p || q ? 1 : 0,
    nor: (p, q) => exports.not(exports.modes.or(p, q)),
    xor: (p, q) => (p ? 1 : 0) ^ (q ? 1 : 0) ? 1 : 0,
    xnor: (p, q) => exports.not(exports.modes.xor(p, q)),
    p: (p, _q) => p ? 1 : 0,
    q: (_p, q) => q ? 1 : 0,
    notP: (p, q) => exports.not(exports.modes.p(p, q)),
    notQ: (p, q) => exports.not(exports.modes.q(p, q)),
    true: (_p, _q) => 1,
    false: (_p, _q) => 0
};
//# sourceMappingURL=modes.js.map