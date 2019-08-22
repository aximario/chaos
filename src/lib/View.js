import PropTypes from 'prop-types'
import styled from 'styled-components'
import { w, h, br, b, bg, jc, ai, fd } from '../styleProps'
import layout from '../services/layout'

const View = styled.div.attrs(layout)`
  box-sizing: border-box;
  display: flex;
  ${w}
  ${h}
  ${br}
  ${b}
  ${bg}
  ${fd}
  ${jc}
  ${ai}
`

View.propTypes = {
  column: PropTypes.bool,
  horizontalAlign: PropTypes.oneOf(['left', 'right', 'center', 'between']),
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'center', 'between'])
}

export default View
