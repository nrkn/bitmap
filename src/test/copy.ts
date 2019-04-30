import * as assert from 'assert'
import { copy } from '..'
import { fromPng } from '../png'
import { pngFixture } from './fixtures/utils'

const patternPng = pngFixture( 'pattern-5x5' )
const patternSmallPng = pngFixture( 'pattern-3x3' )
const patternOutOfBoundsPng = pngFixture( 'pattern-5x5-out-of-bounds' )

describe( 'bitmap', () => {
  describe( 'copy', () => {
    it( 'from source dimensions', () => {
      const expect = fromPng( patternPng )
      const copied = copy( expect )

      assert.deepEqual( copied, expect )
    } )

    it( 'x, y, width, height', () => {
      const expect = fromPng( patternSmallPng )
      const pattern = fromPng( patternPng )
      const copied = copy( pattern, 1, 1, 3, 3 )

      assert.deepEqual( copied, expect )
    })

    it( 'ignores out of bounds', () => {
      const expect = fromPng( patternOutOfBoundsPng )
      const pattern = fromPng( patternPng )
      const copied = copy( pattern, -1, -1 )

      assert.deepEqual( copied, expect )
    } )
  } )
} )
