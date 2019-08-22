import styled from 'styled-components'
import { w, h } from '../styleProps'

const Label = styled.img.attrs(props => ({
  w: props.size,
  h: props.size
}))`
  ${w}
  ${h}
`

export default Label