import { BitmapData } from './types'
import { createBitmap } from '.'

export const resize = ( source: BitmapData, dw: number, dh: number ) => {
  const { width, height } = source

  const dest = createBitmap( dw, dh )

  const xRatio = width / dw
  const yRatio = height / dh

  for ( let y = 0; y < dh; y++ ) {
    const sourceY = Math.floor( y * yRatio )

    for ( let x = 0; x < dw; x++ ) {
      const sourceX = Math.floor( x * xRatio )

      const sourceIndex = sourceY * source.width + sourceX
      const destIndex = y * dest.width + x

      dest.data[ destIndex ] = source.data[ sourceIndex ]
    }
  }

  return dest
}
