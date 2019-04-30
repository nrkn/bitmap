import { readFileSync } from 'fs'

export const pngFixturePath = ( name: string ) =>
  `./src/test/fixtures/${ name }.png`

export const pngFixture = ( name: string ) =>
  readFileSync( pngFixturePath( name ) )
