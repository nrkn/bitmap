import { BoundingRect, BitmapData, Bit, PointSet } from './types';
export declare const pointsBoundingRect: (points: [number, number][]) => BoundingRect;
export declare const triangleBoundingRect: (triangle: [[number, number], [number, number], [number, number]]) => BoundingRect;
export declare const translatePoint: ([x, y]: [number, number], [tx, ty]: [number, number]) => [number, number];
export declare const scalePoint: ([x, y]: [number, number], scale: number) => [number, number];
export declare const translateTriangle: (t: [[number, number], [number, number], [number, number]], translate: [number, number]) => [[number, number], [number, number], [number, number]];
export declare const scaleTriangle: (t: [[number, number], [number, number], [number, number]], scale: number) => [[number, number], [number, number], [number, number]];
export declare const bitmapToPoints: (image: BitmapData, value?: Bit) => [number, number][];
export declare const createPointSet: () => PointSet;
export declare const addLineToSet: (set: PointSet, [[x0, y0], [x1, y1]]: [[number, number], [number, number]]) => void;
export declare const triangleCentroid: (t: [[number, number], [number, number], [number, number]]) => [number, number];
