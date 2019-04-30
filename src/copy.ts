import { BitmapData } from './types'
import { createBitmap } from '.'

export const copy = (
  source: BitmapData,
  sx = 0, sy = 0,
  sw = source.width - sx, sh = source.height - sy
) => {
  sx = sx | 0
  sy = sy | 0
  sw = sw | 0
  sh = sh | 0

  const dest = createBitmap( sw, sh )

  for( let y = 0; y < sh; y++ ){
    const sourceY = sy + y

    if( sourceY < 0 || sourceY >= source.width ) continue

    for( let x = 0; x < sw; x++ ){
      const sourceX = sx + x

      if ( sourceX < 0 || sourceX >= source.width ) continue

      const sourceIndex = sourceY * source.width + sourceX
      const destIndex = y * sw + x

      dest.data[ destIndex ] = source.data[ sourceIndex ]
    }
  }

  return dest
}
