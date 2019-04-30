import * as assert from 'assert'
import { pngFixture } from './fixtures/utils'
import { fromPng } from '../png'
import { createBitmap } from '..'
import { paste } from '../paste'
import { modes } from '../modes'

const patternPng = pngFixture( 'pattern-5x5' )
const patternSmallPng = pngFixture( 'pattern-3x3' )
const ovalPng = pngFixture( 'oval-15x15' )
const patternOvalXorPng = pngFixture( 'pattern-5x5-oval-15x15-xor' )

describe( 'bitmap', () => {
  describe( 'paste', () => {
    it( 'paste', () => {
      const expect = fromPng( patternPng )
      const pattern = fromPng( patternPng )

      const target = createBitmap( 5, 5 )

      paste( pattern, target )

      assert.deepEqual( target, expect )
    } )

    it( 'paste out of bounds', () => {
      const expect = fromPng( patternSmallPng )
      const pattern = fromPng( patternPng )

      const target = createBitmap( 3, 3 )

      paste( pattern, target, -1, -1 )

      assert.deepEqual( target, expect )
    } )

    it( 'paste mode', () => {
      const expect = fromPng( patternOvalXorPng )
      const pattern = fromPng( patternPng )
      const oval = fromPng( ovalPng )

      for ( let y = 0; y < 3; y++ ) {
        const dy = y * 5
        for ( let x = 0; x < 3; x++ ) {
          const dx = x * 5
          paste( pattern, oval, dx, dy, modes.xor )
        }
      }

      assert.deepEqual( oval, expect )
    } )
  } )
} )
