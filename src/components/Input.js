import PropTypes from 'prop-types'
import styled from 'styled-components'

function str (props) {
  const styleObj = {
    border: props.border
  }
  if (props.w) styleObj.width = props.w
  if (props.h) styleObj.height = props.h
  if (props.fontFamily) styleObj.fontFamily = props.fontFamily
  if (props.fontWeight) styleObj.fontWeight = props.fontWeight
  if (props.fontSize) styleObj.fontSize = props.fontSize
  if (props.textAlign) styleObj.textAlign = props.textAlign
  if (props.color) styleObj.color = props.color
  if (props.radius) styleObj.radius = props.radius
  if (props.bg) styleObj.background = props.bg
  return styleObj
}
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

const Input = styled.input(str)

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