import { BitmapData, Bit } from './types'

export { copy } from './copy'
export { fill } from './fill'
export { line } from './line'
export { modes } from './modes'
export { oval } from './oval'
export { paste } from './paste'
export { plot } from './plot'
export { fromPng, toPng } from './png'
export { resize } from './resize'
export { triangle } from './triangle'

export const createBitmap =
  ( width: number, height: number, data?: any[] ): BitmapData => {
    if ( width === undefined || height === undefined ) {
      throw TypeError( 'Not enough arguments' )
    }

    width = width | 0
    height = height | 0

    if ( width < 1 || height < 1 ) {
      throw TypeError(
        'Index or size is negative or greater than the allowed amount'
      )
    }

    const length = width * height

    if ( data === undefined ) {
      data = new Array<Bit>( length ).fill( 0 )
    }

    if( Array.isArray( data ) ){
      if ( data.length !== length ) {
        throw TypeError(
          'Index or size is negative or greater than the allowed amount'
        )
      }

      data = data.map( n => n ? 1 : 0 )

      return {
        get width() { return width; },
        get height() { return height; },
        get data() { return <Bit[]>data; }
      }
    }

    throw TypeError( 'Expected data to be array or undefined' )
  }

export const clone = ( bitmap: BitmapData ) =>
  createBitmap( bitmap.width, bitmap.height, bitmap.data )
