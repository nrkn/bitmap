import * as assert from 'assert'
import { fromPng } from '../png'
import { oval, inOvalArc } from '../oval'
import { pngFixture } from './fixtures/utils'
import { createBitmap } from '..'
import { plot } from '../plot'

const name = (
  width: number, height: number, start?: number, end?: number,
  anticlockwise = false
) => {
  const prefix = `oval-${ width }x${ height }`
  let suffix = ''

  if( start !== undefined && end !== undefined ){
    suffix = `-arc-${ start }-${ end }`

    if( anticlockwise )
      suffix += '-anticlockwise'
  }

  return prefix + suffix
}

describe( 'bitmap', () => {
  describe( 'oval', () => {
    it( 'full oval', () => {
      const sizes = [
        [ 1, 1 ],
        [ 3, 1 ],
        [ 4, 4 ],
        [ 6, 9 ],
        [ 8, 8 ],
        [ 3, 15 ],
        [ 15, 15 ]
      ]

      sizes.forEach( ( [ width, height ] ) => {
        const expectPng = pngFixture( name( width, height ) )
        const expect = fromPng( expectPng )
        const image = createBitmap( width, height )

        plot( image, oval( width, height ) )

        assert.deepEqual( image, expect )
      } )
    } )

    it( 'arc', () => {
      const width = 15
      const height = 11

      const angleToRadian = angle => angle * ( Math.PI / 180 )

      const arcs: [ number, number, boolean? ][] = [
        [ 0, 0 ],
        [ 0, 45 ],
        [ 0, 45, true ],
        [ 0, 180 ],
        [ 180, 135 ],
        [ 0, 315 ],
        [ 315, 0 ]
      ]

      arcs.forEach( ( [ start, end, anticlockwise = false ] ) => {
        const png = pngFixture(
          name( width, height, start, end, anticlockwise )
        )

        const expect = fromPng( png )

        const startRadians = angleToRadian( start )
        const endRadians = angleToRadian( end )

        const image = createBitmap( width, height )

        plot( image, oval(
          width, height, startRadians, endRadians, anticlockwise
        ) )

        assert.deepEqual( image, expect )
      } )
    } )

    it( 'inOvalArc', () => {
      assert( inOvalArc( 1, 1, 5, 5, Math.PI, Math.PI * 1.5, false ) )
      assert( !inOvalArc( 4, 4, 5, 5, Math.PI, Math.PI * 1.5, false ) )
      assert( inOvalArc( 1, 1, 5, 5, Math.PI * -6, Math.PI * -6.1, false ) )
    })
  } )
} )
