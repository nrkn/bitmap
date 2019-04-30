import { BitmapData, RgbaToBit, BitToRgba } from './types';
export declare const defaultRgbaToBit: RgbaToBit;
export declare const defaultBitToRgba: BitToRgba;
export declare const fromPng: (pngBuffer: Uint8Array, mapper?: RgbaToBit) => BitmapData;
export declare const toPng: (imageData: BitmapData, mapper?: BitToRgba) => Uint8Array;
