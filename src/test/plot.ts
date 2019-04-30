import * as assert from 'assert'
import { createBitmap } from '..'
import { line } from '../line'
import { plot } from '../plot'
import { fromPng } from '../png'
import { pngFixture } from './fixtures/utils'
import { modes } from '../modes'
import { bitmapToPoints } from '../utils';

const plotLinesPng = pngFixture( 'plot-lines' )
const ovalPng = pngFixture( 'oval-15x15' )
const plotLinesOvalXorPng = pngFixture( 'plot-lines-oval-15x15-xor' )

describe( 'bitmap', () => {
  describe( 'plot', () => {
    it( 'line', () => {
      const expect = fromPng( plotLinesPng )
      const image = createBitmap( 5, 5 )
      const lines = line( 0, 0, 4, 4 ).concat( line( 0, 4, 4, 0 ) )

      plot( image, lines )

      assert.deepEqual( image, expect )
    } )

    it( 'out of bounds', () => {
      const expect = fromPng( plotLinesPng )
      const image = createBitmap( 5, 5 )
      const lines = line( -1, -1, 5, 5 ).concat( line( 0, 4, 4, 0 ) )

      plot( image, lines )

      assert.deepEqual( image, expect )
    } )

    it( 'mode', () => {
      const expect = fromPng( plotLinesOvalXorPng )
      const image = fromPng( ovalPng )
      const lines = line( 0, 0, 14, 14 ).concat( line( 0, 14, 14, 0 ) )

      plot( image, lines, modes.xor )

      assert.deepEqual( image, expect )
    } )

    it( 'round trips', () => {
      const expect = fromPng( plotLinesPng )
      const points = bitmapToPoints( fromPng( plotLinesPng ) )
      const image = createBitmap( expect.width, expect.height )

      plot( image, points )

      assert.deepEqual( image, expect )
    } )
  } )
} )
