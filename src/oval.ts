import { Point } from './types'

export const oval = (
  width: number, height: number,
  startRadians = 0, endRadians = 0, anticlockwise = false
) => {
  const points: Point[] = []
  for ( let y = 0; y < height; y++ ) {
    for ( let x = 0; x < width; x++ ) {
      const isInside = inOvalArc(
        x, y, width, height, startRadians, endRadians, anticlockwise
      )

      if( isInside ){
        points.push( [ x, y ] )
      }
    }
  }

  return points
}

export const inOvalArc = (
  x: number, y: number,
  width: number, height: number,
  startRadians: number, endRadians: number, anticlockwise: boolean
) => {
  const xStep = 1 / width
  const yStep = 1 / height

  const xOff = 1 / ( width * 2 )
  const yOff = 1 / ( height * 2 )

  const xNormal = xStep * x + xOff
  const yNormal = yStep * y + yOff

  const dX = xNormal - 0.5
  const dY = yNormal - 0.5

  if ( startRadians !== endRadians ) {
    const theta = Math.atan2( dY, dX ) * ( anticlockwise ? -1 : 1 )

    if ( !between( startRadians, endRadians, theta ) )
      return false
  }

  const dist = Math.hypot( dX, dY )

  return dist <= 0.5
}

const pi2 = Math.PI * 2

const between = ( start: number, end: number, mid: number ) => {
  end = normalize( end - start )
  mid = normalize( mid - start )

  return mid <= end
}

const normalize = ( radians: number ) => {
  while( radians < 0 ) radians += pi2
  while( radians > pi2 ) radians -= pi2

  return radians
}
