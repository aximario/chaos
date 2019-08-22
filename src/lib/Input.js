import styled from 'styled-components'
import { w, h, ff, fw, fs, ta, br, c, bg, b } from '../styleProps'

const Input = styled.input`
  outline: none;
  ${w}
  ${h}
  ${ff}
  ${fw}
  ${fs}
  ${ta}
  ${br}
  ${c}
  ${bg}
  ${b}
`

Input.defaultProps = {
  border: '1px solid #999'
}

export default Input