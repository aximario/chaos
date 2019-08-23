import styled from 'styled-components'
import { w, h, ff, fs, fw, ta, c, lh } from '../styleProps'
import layout from '../services/layout'

const Label = styled.label.attrs(layout)`
  display: inline-block;
  ${w}
  ${h}
  ${ff}
  ${fs}
  ${fw}
  ${ta}
  ${c}
  ${lh}
`

export default Label