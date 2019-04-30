import { BitmapData, Bit, Point } from './types';
export declare const floodFillImage: (image: BitmapData, x: number, y: number, to?: Bit) => void;
export declare type FloodFillPredicate = ([x, y]: Point) => boolean;
export declare type FloodFillCallback = ([x, y]: Point) => void;
export declare const floodFill: (x: number, y: number, width: number, height: number, canFlood: FloodFillPredicate, onFlood: FloodFillCallback) => void;
