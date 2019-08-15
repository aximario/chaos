import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size, typography, border, compose } from '../styleProps'

// return `
//   outline: none;
//   ${props => props.w && `width: ${props.w};`}
//   ${props => props.h && `height: ${props.h};`}
//   ${props => props.fontFamily && `font-family: ${props.fontFamily};`}
//   ${props => props.fontWeight && `font-weight: ${props.fontWeight};`}
//   ${props => props.fontSize && `font-size: ${props.fontSize};`}
//   ${props => props.textAlign && `text-align: ${props.textAlign};`}
//   ${props => props.color && `color: ${props.color};`}
//   ${props => props.radius && `border-radius: ${props => props.radius};`}
//   ${props => props.bg && `background: ${props.bg};`}
//   border: ${props => props.border};
// `

const Input = styled.input(props => {
  const styleObj = {
    outline: 'none'
  }
  if (props.color) styleObj.color = props.color
  return compose(props, [
    styleObj, size, typography, border
  ])
})

Input.defaultProps = {
  border: '1px solid #999'
}

Input.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  textAlign: PropTypes.string,
  color: PropTypes.string,
  radius: PropTypes.string,
  border: PropTypes.string,
  bg: PropTypes.string
}

export default Input