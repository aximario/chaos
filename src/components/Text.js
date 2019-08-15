import PropTypes from 'prop-types'
import styled from 'styled-components'
import { compose, size, typography } from '../styleProps'

const Text = styled.span(props => {
  const styleObj = {
    display: 'inline-block'
  }
  if (props.color) styleObj.color = props.color
  return compose(props, [
    styleObj, size, typography
  ])
})

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