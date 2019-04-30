export type Bit = 1 | 0

export interface BitmapData {
  width: number
  height: number
  data: Array<Bit>
}

export type RgbaToBit = ( r: number, b: number, g: number, a: number ) => Bit

export type BitToRgba = ( bit: Bit ) => [ number, number, number, number ]

export type Mode = ( a: any, b: any ) => Bit

export interface Modes {
  [ name: string ]: Mode
}

export type Point = [ number, number ]

export type Triangle = [ Point, Point, Point ]

export interface BoundingRect {
  top: number
  right: number
  bottom: number
  left: number
}

export interface Size {
  width: number
  height: number
}

export interface PointSet {
  add: ( p: Point ) => void
  has: ( p: Point ) => boolean
  points: Point[]
}