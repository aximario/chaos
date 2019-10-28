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

export default function View ({
  children,
  width,
  height,
  backgroundColor, 
  column,
  horizontalAlign,
  verticalAlign,
  borderRadius,
  ...props
}) {
  let jc = 'flex-start'
  let ai = 'flex-start'
  if (column) {
    if (horizontalAlign === 'right') {
      ai = 'flex-end'
    }
    if (horizontalAlign === 'center') {
      ai = 'center'
    }
    if (horizontalAlign === 'between') {
      ai = 'space-between'
    }
    if (verticalAlign === 'right') {
      jc = 'flex-end'
    }
    if (verticalAlign === 'center') {
      jc = 'center'
    }
    if (verticalAlign === 'between') {
      jc = 'space-between'
    }
  } else {
    if (horizontalAlign === 'right') {
      jc = 'flex-end'
    }
    if (horizontalAlign === 'center') {
      jc = 'center'
    }
    if (horizontalAlign === 'between') {
      jc = 'space-between'
    }
    if (verticalAlign === 'right') {
      ai = 'flex-end'
    }
    if (verticalAlign === 'center') {
      ai = 'center'
    }
    if (verticalAlign === 'between') {
      ai = 'space-between'
    }
  }
  return (
    <Div
      {...props}
      w={width}
      h={height}
      bg={backgroundColor}
      fd={column ? 'column' : 'row'}
      jc={jc}
      ai={ai}
      br={borderRadius}
    >{children}</Div>
  )
}

View.propTypes = {
  column: PropTypes.bool,
  horizontalAlign: PropTypes.oneOf(['left', 'right', 'center', 'between']),
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'center', 'between']),
  width: PropTypes.any,
  height: PropTypes.any,
  backgroundColor: PropTypes.any,
  borderRadius: PropTypes.any
}
