import PropTypes from 'prop-types'
import styled from 'styled-components'

const Text = styled.span`
  display: inline-block;
  ${props => props.w && `width: ${props.w};`}
  ${props => props.h && `height: ${props.h};`}
  ${props => props.fontFamily && `font-family: ${props.fontFamily};`}
  ${props => props.fontWeight && `font-weight: ${props.fontWeight};`}
  ${props => props.fontSize && `font-size: ${props.fontSize};`}
  ${props => props.lineHeight && `line-height: ${props.lineHeight};`}
  ${props => props.textAlign && `text-align: ${props.textAlign};`}
  ${props => props.color && `text-align: ${props.color};`}
`
Text.defaultProps = {
  h: 'fit-content'
}

Text.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  textAlign: PropTypes.string,
  color: PropTypes.string
}

export default Text