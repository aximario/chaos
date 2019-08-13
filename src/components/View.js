import PropTypes from 'prop-types'
import styled from 'styled-components'

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
  width: ${props => props.w};
  height: ${props => props.h};
  ${props => props.horizontalAlign && `justify-content: ${props => horizontalAlign(props.horizontalAlign)};`}
  ${props => props.verticalAlign && `align-items: ${props => horizontalAlign(props.verticalAlign)};`}
  ${props => props.column && `
    flex-direction: column;
    ${props => props.horizontalAlign && `align-items: ${props => verticalAlign(props.horizontalAlign)};`}
    ${props => props.verticalAlign && `justify-content: ${props => verticalAlign(props.verticalAlign)};`}
  `}
  border-radius: ${props => props.radius};
  border: ${props => props.border};
  background: ${props => props.bg};
`

View.defaultProps = {
  w: '100px',
  h: '100px',
  border: '1px solid #999',
  bg: '#aaa'
}

View.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  column: PropTypes.bool,
  horizontalAlign: PropTypes.oneOf(['left', 'right', 'center']),
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'center']),
  radius: PropTypes.string,
  border: PropTypes.string,
  bg: PropTypes.string
}

export default View
