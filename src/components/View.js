import PropTypes from 'prop-types'
import styled from 'styled-components'
import { w, h, br, b, bg } from '../styleProps'

function horizontalAlign (align) {
  if (align === 'center') return 'center'
  if (align === 'right' || align === 'bottom') return 'flex-end'
  if (align === 'left' || align === 'top') return 'flex-start'
  if (align === 'between') return 'space-between'
}

function verticalAlign (align) {
  if (align === 'center') return 'center'
  if (align === 'right' || align === 'top') return 'flex-start'
  if (align === 'left' || align === 'bottom') return 'flex-end'
  if (align === 'between') return 'space-between'
}

const View = styled.div.attrs(props => {
  const obj = {}
  if (props.column) {
    obj.fd = 'column'
    if (props.horizontalAlign) {
      obj.ai = verticalAlign(props.horizontalAlign)
    }
    if (props.verticalAlign) {
      obj.jc = verticalAlign(props.verticalAlign)
    }
  } else {
    if (props.horizontalAlign) {
      obj.jc = horizontalAlign(props.horizontalAlign)
    }
    if (props.verticalAlign) {
      obj.ai = horizontalAlign(props.verticalAlign)
    }
  }
  return obj
})`
  box-sizing: border-box;
  display: flex;
  ${w}
  ${h}
  ${br}
  ${b}
  ${bg}
  ${props => props.fd && `flex-direction: ${props.fd};`}
  ${props => props.jc && `justify-content: ${props.jc};`}
  ${props => props.ai && `align-items: ${props.ai};`}
`

View.propTypes = {
  column: PropTypes.bool,
  horizontalAlign: PropTypes.oneOf(['left', 'right', 'center', 'between']),
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'center', 'between'])
}

export default View
