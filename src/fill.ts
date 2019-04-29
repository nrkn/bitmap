import { BitmapData, Mode, Bit } from './types'
import { modes } from './modes'

export const fill = (
  source: BitmapData, value: Bit, mode: Mode = modes.q
) => {
  const { width, height } = source

  for ( let y = 0; y < height; y++ ) {
    for ( let x = 0; x < width; x++ ) {
      const sourceIndex = y * width + y

      source.data[ sourceIndex ] = mode( source.data[ sourceIndex ], value )
    }
  }
}
