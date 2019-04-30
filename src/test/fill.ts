import * as assert from 'assert'
import { createBitmap } from '..'
import { fromPng } from '../png'
import { fill } from '../fill'
import { modes } from '../modes'
import { pngFixture } from './fixtures/utils'

const filledPng = pngFixture( 'filled' )
const patternPng = pngFixture( 'pattern-5x5' )
const xorPng = pngFixture( 'pattern-5x5-xor-1' )

describe( 'bitmap', () => {
  describe( 'fill', () => {
    it( 'fills with 1', () => {
      const expect = fromPng( filledPng )
      const image = createBitmap( 5, 5 )

      fill( image )

      assert.deepEqual( image, expect )
    } )

    it( 'uses mode', () => {
      const expect = fromPng( xorPng )
      const image = fromPng( patternPng )

      fill( image, 1, modes.xor )

      assert.deepEqual( image, expect )
    } )
  } )
} )
