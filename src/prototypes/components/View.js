import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { w, h, br, b, bg, jc, ai, fd } from '../../styleProps'
import layout from '../../services/layout'

const Div = styled.div.attrs(layout)`
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

export default function View ({ children, width, height, backgroundColor, ...props }) {
  return (
    <Div
      {...props}
      w={width}
      h={height}
      bg={backgroundColor}
    >{children}</Div>
  )
}

View.propTypes = {
  column: PropTypes.bool,
  horizontalAlign: PropTypes.oneOf(['left', 'right', 'center', 'between']),
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'center', 'between']),
  width: PropTypes.any,
  height: PropTypes.any,
  backgroundColor: PropTypes.any
}
