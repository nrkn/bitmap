import { Bit } from './types';
export declare const not: (p: any) => 1 | 0;
export declare const modes: {
    and: (p: any, q: any) => Bit;
    nand: (p: any, q: any) => Bit;
    or: (p: any, q: any) => Bit;
    nor: (p: any, q: any) => Bit;
    xor: (p: any, q: any) => Bit;
    xnor: (p: any, q: any) => Bit;
    p: (p: any, _q: any) => Bit;
    q: (_p: any, q: any) => Bit;
    notP: (p: any, q: any) => Bit;
    notQ: (p: any, q: any) => Bit;
    true: (_p: any, _q: any) => Bit;
    false: (_p: any, _q: any) => Bit;
};
