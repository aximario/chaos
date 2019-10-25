import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { w, h, ff, fs, fw, ta, c, lh } from '../../styleProps'

const Span = styled.span`
  display: inline-block;
  ${w}
  ${h}
  ${ff}
  ${fs}
  ${fw}
  ${ta}
  ${c}
  ${lh}
`

export default function Text ({ children, width, height, fontFamily, fontSize, fontWeight, color, textAlign, lineHeight, ...props }) {
  return (
    <Span
      {...props}
      w={width}
      h={height}
      ff={fontFamily}
      fs={fontSize}
      fw={fontWeight}
      ta={textAlign}
      c={color}
      lh={lineHeight}
    >{children}</Span>
  )
}

Text.propTypes = {
  fontSize: PropTypes.any,
  fontFamily: PropTypes.any,
  fontWeight: PropTypes.any,
  lineHeight: PropTypes.any,
  color: PropTypes.any,
  textAlign: PropTypes.any,
  width: PropTypes.any,
  height: PropTypes.any
}