import {
  BoundingRect, Size, Point, Triangle, BitmapData, Bit, PointSet
} from './types'
import { line } from './line'

export const pointsBoundingRect = ( points: Point[] ): BoundingRect => {
  let left = Number.MAX_SAFE_INTEGER
  let top = Number.MAX_SAFE_INTEGER
  let right = Number.MIN_SAFE_INTEGER
  let bottom = Number.MIN_SAFE_INTEGER

  points.forEach( ( [ x, y ] ) => {
    if ( x < left ) left = x
    if ( y < top ) top = y
    if ( x > right ) right = x
    if ( y > bottom ) bottom = y
  } )

  return { top, right, bottom, left }
}

export const triangleBoundingRect =
  ( triangle: Triangle ) => pointsBoundingRect( triangle )

export const translatePoint = ( [ x, y ]: Point, [ tx, ty ]: Point ) =>
  <Point>[ x + tx, y + ty ]

export const scalePoint = ( [ x, y ]: Point, scale: number ) =>
  <Point>[ x * scale, y * scale ]

export const translateTriangle = ( t: Triangle, translate: Point ) =>
  <Triangle>t.map( p => translatePoint( p, translate ) )

export const scaleTriangle = ( t: Triangle, scale: number ) =>
  <Triangle>t.map( p => scalePoint( p, scale ) )

export const bitmapToPoints = ( image: BitmapData, value: Bit = 1 ) => {
  const { width, height, data } = image
  const points: Point[] = []

  for( let y = 0; y < height; y++ ){
    for( let x = 0; x < width; x++ ){
      const index = y * width + x

      if( data[ index ] === value ) points.push( [ x, y ] )
    }
  }

  return points
}

export const createPointSet = (): PointSet => {
  const existing = new Set<string>()
  const points: Point[] = []

  const add = ( p: Point ) => {
    const key = JSON.stringify( p )

    if( existing.has( key ) ) return

    points.push( p )
    existing.add( key )
  }

  const has = ( p: Point ) => existing.has( JSON.stringify( p ) )

  return { add, has, get points(){ return points.slice() } }
}

export const addLineToSet =
  ( set: PointSet, [ [ x0, y0 ], [ x1, y1 ] ]: [ Point, Point ] ) => {
    line( x0, y0, x1, y1 ).forEach( set.add )
  }

export const triangleCentroid = ( t: Triangle ): Point => {
  const [ [ x0, y0 ], [ x1, y1 ], [ x2, y2 ] ] = t

  const cx = ( x0 + x1 + x2 ) / 3
  const cy = ( y0 + y1 + y2 ) / 3

  return [ cx, cy ]
}
