import * as assert from 'assert'
import { Triangle } from '../types'
import { triangle } from '../triangle'
import { scaleTriangle, translateTriangle } from '../utils'
import { createBitmap } from '..'
import { plot } from '../plot'
import { pngFixture } from './fixtures/utils'
import { fromPng } from '../png';

describe( 'bitmap', () => {
  describe( 'triangle', () => {
    let triangles: Triangle[] = [
      [
        [ 2, 0 ], [ 0, 4 ], [ 4, 4 ]
      ],
      [
        [ 0, 0 ], [ 0, 4 ], [ 4, 4 ]
      ],
      [
        [ 2, 0 ], [ 1, 4 ], [ 2, 4 ]
      ],
      [
        [ 2, 0 ], [ 1, 1 ], [ 2, 1 ]
      ],
      [
        [ 2, 0 ], [ 1, 4 ], [ 3, 4 ]
      ]
    ]

    triangles = triangles.map( t =>
      translateTriangle(
        scaleTriangle( t, 3 ),
        [ 1, 1 ]
      )
    )

    const name = ( t: Triangle ) => {
      const id = t.map( p => p.join( '_' ) ).join( '-' )

      return `triangle-${ id }`
    }

    triangles.forEach( t => {
      it( JSON.stringify( t ), () => {
        const expect = fromPng( pngFixture( name( t ) ) )
        const points = triangle( t )
        const image = createBitmap( 16, 16 )

        plot( image, points )

        assert.deepEqual( image, expect )
      } )
    } )
  } )
} )
