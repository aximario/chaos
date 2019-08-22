import PropTypes from 'prop-types'
import styled from 'styled-components'
import { w, h, br, b, bg, jc, ai, fd } from '../styleProps'
import layout from '../services/layout'

const List = styled.ul.attrs(layout)`
  box-sizing: border-box;
  display: flex;
  margin: 0;
  padding: 0;
  ${w}
  ${h}
  ${br}
  ${b}
  ${bg}
  ${fd}
  ${jc}
  ${ai}
`

List.defaultProps = {
  column: true
}

List.propTypes = {
  column: PropTypes.bool,
  horizontalAlign: PropTypes.oneOf(['left', 'right', 'center', 'between']),
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'center', 'between'])
}

List.Item = styled.li.attrs(layout)`
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

export default List
