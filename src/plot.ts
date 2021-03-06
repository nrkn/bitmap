import { BitmapData, Point, Mode } from './types'
import { modes } from './modes'

export const plot =
  ( image: BitmapData, points: Point[], mode: Mode = modes.q ) => {
    const { width, height } = image

    points.forEach( ( [ x, y ] ) => {
      x = x | 0
      y = y | 0

      if( x < 0 || y < 0 || x >= width || y >= height ) return

      const index = y * width + x

      image.data[ index ] = mode( image.data[ index ], 1 )
    } )
  }
