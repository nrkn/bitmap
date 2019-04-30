import { Triangle } from './types'

import {
  triangleBoundingRect, createPointSet, addLineToSet, triangleCentroid
} from './utils'

import { floodFill } from './floodfill'

export const triangle = ( triangle: Triangle ) => {
  const { right, bottom } = triangleBoundingRect( triangle )
  const pointSet = createPointSet()
  const [ t0, t1, t2 ] = triangle

  addLineToSet( pointSet, [ t0, t1 ] )
  addLineToSet( pointSet, [ t1, t2 ] )
  addLineToSet( pointSet, [ t2, t0 ] )
  // add reversed lines too, for symmetry
  addLineToSet( pointSet, [ t1, t0 ] )
  addLineToSet( pointSet, [ t2, t1 ] )
  addLineToSet( pointSet, [ t0, t2 ] )

  const canFlood = p => !pointSet.has( p )
  const onFlood = p => pointSet.add( p )
  const [ cx, cy ] = triangleCentroid( triangle )

  floodFill( cx, cy, right, bottom, canFlood, onFlood )

  return pointSet.points
}
