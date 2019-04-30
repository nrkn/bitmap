import * as assert from 'assert'
import { readFileSync } from 'fs'
import { createBitmap, clone } from '..'
import { fromPng } from '../png'
import { pngFixture } from './fixtures/utils'

describe( 'bitmap', () => {
  describe( 'createBitmap', () => {
    it( 'creates a bitmap image', () => {
      const expectPng = pngFixture( 'empty' )
      const expect = fromPng( expectPng )
      const image = createBitmap( 5, 5 )

      assert.deepEqual( image, expect )
    } )

    it( 'creates a bitmap from data', () => {
      const expectPng = pngFixture( 'pattern-5x5' )
      const expect = fromPng( expectPng )
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

    it( 'clones', () => {
      const expectPatternPng = readFileSync(
        './src/test/fixtures/pattern-5x5.png'
      )
      const expectPattern = fromPng( expectPatternPng )
      const expectEmptyPng = pngFixture( 'empty' )
      const expectEmpty = fromPng( expectEmptyPng )

      const pattern = fromPng( expectPatternPng )
      const cloned = clone( pattern )

      for( let i = 0; i < cloned.data.length; i++ ){
        cloned.data[ i ] = 0
      }

      assert.deepEqual( pattern, expectPattern )
      assert.deepEqual( cloned, expectEmpty )
    } )

    it( 'Expected data to be array or undefined', () => {
      const create = <any>createBitmap

      assert.throws(
        () => {
          create( 5, 5, 'foo' )
        },
        {
          message: 'Expected data to be array or undefined'
        }
      )
    } )

    it( 'Not enough arguments', () => {
      const create = <any>createBitmap

      assert.throws(
        () => {
          create()
        },
        {
          message: 'Not enough arguments'
        }
      )

      assert.throws(
        () => {
          create( 5 )
        },
        {
          message: 'Not enough arguments'
        }
      )
    } )

    it( 'Index or size is negative or greater than the allowed amount', () => {
      assert.throws(
        () => {
          createBitmap( -5, 5 )
        },
        {
          message: 'Index or size is negative or greater than the allowed amount'
        }
      )

      assert.throws(
        () => {
          createBitmap( 5, -5 )
        },
        {
          message: 'Index or size is negative or greater than the allowed amount'
        }
      )

      assert.throws(
        () => {
          createBitmap( 5, 5, [ 1, 1, 1 ] )
        },
        {
          message: 'Index or size is negative or greater than the allowed amount'
        }
      )
    } )
  } )
} )
