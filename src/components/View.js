import PropTypes from 'prop-types'
import styled from 'styled-components'
import { w, h, br, b, bg } from '../styleProps'

function horizontalAlign (align) {
  if (align === 'center') return 'center'
  if (align === 'right' || align === 'bottom') return 'flex-end'
  if (align === 'left' || align === 'top') return 'flex-start'
}

function verticalAlign (align) {
  if (align === 'center') return 'center'
  if (align === 'right' || align === 'top') return 'flex-start'
  if (align === 'left' || align === 'bottom') return 'flex-end'
}

const View = styled.div`
  box-sizing: border-box;
  display: flex;
  ${w}
  ${h}
  ${props => props.horizontalAlign && `justify-content: ${props => horizontalAlign(props.horizontalAlign)};`}
  ${props => props.verticalAlign && `align-items: ${props => horizontalAlign(props.verticalAlign)};`}
  ${props => props.column && `
    flex-direction: column;
    ${props => props.horizontalAlign && `align-items: ${props => verticalAlign(props.horizontalAlign)};`}
    ${props => props.verticalAlign && `justify-content: ${props => verticalAlign(props.verticalAlign)};`}
  `}
  ${br}
  ${b}
  ${bg}
`

View.propTypes = {
  column: PropTypes.bool,
  horizontalAlign: PropTypes.oneOf(['left', 'right', 'center']),
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'center'])
}

export default View
