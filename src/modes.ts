import { Bit } from './types'

export const not = p => p ? 0 : 1

export const modes = {
  and: ( p, q ): Bit => p && q ? 1 : 0,
  nand: ( p, q ): Bit => not( modes.and( p, q ) ),
  or: ( p, q ): Bit => p || q ? 1 : 0,
  nor: ( p, q ): Bit => not( modes.or( p, q ) ),
  xor: ( p, q ): Bit => ( p ? 1 : 0 ) ^ ( q ? 1 : 0 ) ? 1 : 0,
  xnor: ( p, q ): Bit => not( modes.xor( p, q ) ),
  p: ( p, _q ): Bit => p ? 1 : 0,
  q: ( _p, q ): Bit => q ? 1 : 0,
  notP: ( p, q ): Bit => not( modes.p( p, q ) ),
  notQ: ( p, q ): Bit => not( modes.q( p, q ) ),
  true: ( _p, _q ): Bit => 1,
  false: ( _p, _q ): Bit => 0
}
