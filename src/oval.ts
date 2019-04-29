import { createBitmap } from '.'

export const oval = ( width: number, height: number, start = 0, end = 0 ) => {
  const image = createBitmap( width, height )
  const { data } = image

  for ( let y = 0; y < height; y++ ) {
    for ( let x = 0; x < width; x++ ) {
      const isInside = inOval( x, y, width, height, start, end )
      const index = y * width + x

      data[ index ] = isInside ? 1 : 0
    }
  }

  return image
}

export const inOval = ( x, y, width, height, start = 0, end = 0 ) => {
  const xStep = 1 / ( width )
  const yStep = 1 / ( height )

  const xOff = 1 / ( width * 2 )
  const yOff = 1 / ( height * 2 )

  const xNormal = xStep * x + xOff
  const yNormal = yStep * y + yOff

  const dX = xNormal - 0.5
  const dY = yNormal - 0.5

  if ( start !== end ) {
    const theta = Math.atan2( dX, dY )

    if ( theta < start || theta > end ) return false
  }

  const dist = Math.hypot( dX, dY )

  return dist <= 0.5
}
