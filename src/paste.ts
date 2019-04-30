import { BitmapData, Mode } from './types'
import { modes } from './modes'

export const paste = (
  source: BitmapData, dest: BitmapData,
  dx = 0, dy = 0,
  mode: Mode = modes.q
) => {
  const { width, height } = source

  dx = dx | 0
  dy = dy | 0

  for ( let y = 0; y < height; y++ ) {
    const destY = dy + y

    if ( destY < 0 || destY >= dest.height ) continue

    for ( let x = 0; x < width; x++ ) {
      const destX = dx + x

      if ( destX < 0 || destX >= dest.width ) continue

      const sourceIndex = y * source.width + x
      const destIndex = destY * dest.width + destX

      dest.data[ destIndex ] = mode(
        dest.data[ destIndex ], source.data[ sourceIndex ]
      )
    }
  }
}
