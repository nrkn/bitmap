import * as assert from 'assert'
import { createBitmap } from '..'
import { pngFixture, pngFixturePath } from './fixtures/utils'
import { fromPng, toPng } from '../png'
import { RgbaToBit, BitToRgba } from '../types';
import { writeFileSync } from 'fs';

const patternPng = pngFixture( 'pattern-5x5' )
const patternAlphaPng = pngFixture( 'pattern-5x5-alpha' )

describe( 'bitmap', () => {
  describe( 'png', () => {
    describe( 'fromPng', () => {
      it( 'default mapper', () => {
        const expect = fromPng( patternPng )
        const data = [
          1, 1, 1, 1, 1,
          1, 0, 0, 0, 1,
          1, 0, 1, 0, 1,
          1, 0, 0, 0, 1,
          1, 1, 1, 1, 1
        ]

        const image = createBitmap( 5, 5, data )

        assert.deepEqual( image, expect )
      } )
    } )

    describe( 'toPng', () => {
      it( 'defaultMapper', () => {
        const expect = fromPng( patternPng )
        const image = fromPng( toPng( expect ) )

        assert.deepEqual( image, expect )
      } )
    } )

    describe( 'mappers', () => {
      it( 'custom mappers', () => {
        const expect = fromPng( patternPng )
        const pattern = fromPng( patternPng )

        const toRgba: BitToRgba = bit => [ 255, 255, 255, bit ? 255 : 0 ]
        const toBit: RgbaToBit = ( _r, _g, _b, a ) => a > 127 ? 1 : 0

        const png = toPng( pattern, toRgba )
        const image = fromPng( png, toBit )

        assert.deepEqual( image, expect )
      } )
    })
  } )
} )