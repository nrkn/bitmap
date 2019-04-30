import * as assert from 'assert'
import { oval } from '../oval'
import { resize } from '../resize'
import { pngFixture } from './fixtures/utils'
import { fromPng } from '../png'
import { createBitmap } from '..'
import { plot } from '../plot'

describe( 'bitmap', () => {
  const circlePoints = oval( 15, 15 )
  const circle = createBitmap( 15, 15 )

  plot( circle, circlePoints )

  const sizes = [
    [ 8, 6 ],
    [ 15, 15 ],
    [ 5, 25 ],
    [ 25, 25 ]
  ]

  describe( 'resize', () => {
    sizes.forEach( ( [ width, height ] ) => {
      it( `15x15 -> ${ width }x${ height }`, () => {
        const expect = fromPng( pngFixture( `resized-${ width }x${ height }` ) )
        const image = resize( circle, width, height )

        assert.deepEqual( expect, image )
      } )
    } )
  } )
} )
