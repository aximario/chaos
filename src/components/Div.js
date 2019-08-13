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

const Div = styled.div`
  box-sizing: border-box;
  display: flex;
  width: ${props => props.w};
  height: ${props => props.h};
  justify-content: ${props => horizontalAlign(props.horizontalAlign)};
  align-items: ${props => horizontalAlign(props.verticalAlign)};
  ${props => props.column && `
    flex-direction: column;
    align-items: ${props => verticalAlign(props.horizontalAlign)};
    justify-content: ${props => verticalAlign(props.verticalAlign)};
  `}
  ${props => Boolean(props.radius) && `border-radius: ${props.radius}`}
  ${props => Boolean(props.border) && `border: ${props.border}`}
  ${props => Boolean(props.bg) && `background: ${props.bg}`}
`

Div.defaultProps = {
  w: '100px',
  h: '100px',
  column: false,
  horizontalAlign: 'left',
  verticalAlign: 'center',
  radius: '0',
  border: '1px solid #999',
  bg: '#aaa'
}

Div.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  column: PropTypes.bool,
  horizontalAlign: PropTypes.oneOf(['left', 'right', 'center']),
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'center']),
  radius: PropTypes.string,
  border: PropTypes.string,
  bg: PropTypes.string
}

export default Div
