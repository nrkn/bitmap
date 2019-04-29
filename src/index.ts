import { BitmapData, Bit } from './types'

export const createBitmap = (
  width: number, height: number,
  data = Array<any>( width * height ).fill( 0 )
): BitmapData => {
  if ( width === undefined || height === undefined ) {
    throw TypeError( 'Not enough arguments' )
  }

  width = Math.floor( width )
  height = Math.floor( height )

  if ( isNaN( width ) || width < 1 || isNaN( height ) || height < 1 ) {
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
