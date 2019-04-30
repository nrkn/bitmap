import * as assert from 'assert'
import { line } from '../line'
import { createBitmap } from '..'
import { plot } from '../plot'
import { fromPng } from '../png'
import { pngFixture } from './fixtures/utils'
import { floodFillImage } from '../floodfill'
import { fill } from '../fill'
import { modes } from '../modes'

const floodFillNonePng = pngFixture( 'floodfill-none' )
const floodFillPng = pngFixture( 'floodfill-0-1' )
const floodFillInversePng = pngFixture( 'floodfill-1-0' )
const floodFillComplexNonePng = pngFixture( 'floodfill-complex-none' )
const floodFillComplexPng = pngFixture( 'floodfill-complex' )

describe( 'bitmap', () => {
  describe( 'floodfill', () => {
    const start = 1
    const end = 9
    const center = 5

    const lines = [
      ...line( center, start, end, center ),
      ...line( end, center, center, end ),
      ...line( center, end, start, center ),
      ...line( start, center, center, start )
    ]

    it( 'ignores when from and to are same', () => {
      const expect = fromPng( floodFillNonePng )
      const image = createBitmap( 11, 11 )

      plot( image, lines )
      floodFillImage( image, center, center, 0 )

      assert.deepEqual( image, expect )
    } )

    it( 'fills 0 with 1 by default', () => {
      const expect = fromPng( floodFillPng )
      const image = createBitmap( 11, 11 )

      plot( image, lines )
      floodFillImage( image, center, center )

      assert.deepEqual( image, expect )
    } )

    it( 'fills 1 with 0', () => {
      const expect = fromPng( floodFillInversePng )
      const image = createBitmap( 11, 11 )

      fill( image, 1 )
      plot( image, lines, modes.false )
      floodFillImage( image, center, center, 0 )

      assert.deepEqual( image, expect )
    } )

    it( 'complex', () => {
      const expect = fromPng( floodFillComplexPng )
      const image = fromPng( floodFillComplexNonePng )

      floodFillImage( image, 21, 21 )

      assert.deepEqual( image, expect )
    } )
  } )
} )