import React from 'react'
import HorizontalBetween from './HorizontalBetween'
import HorizontalCenter from './HorizontalCenter'
import HorizontalLeft from './HorizontalLeft'
import HorizontalRight from './HorizontalRight'
import VerticalBetween from './VerticalBetween'
import VerticalBottom from './VerticalBottom'
import VerticalCenter from './VerticalCenter'
import VerticalTop from './VerticalTop'

export default function Icon ({ model, size, color, ...props }) {
  if (model === 1) {
    return <HorizontalBetween size={size} color={color} {...props} />
  }
  if (model === 2) {
    return <HorizontalCenter size={size} color={color} {...props} />
  }
  if (model === 3) {
    return <HorizontalLeft size={size} color={color} {...props} />
  }
  if (model === 4) {
    return <HorizontalRight size={size} color={color} {...props} />
  }
  if (model === 5) {
    return <VerticalBetween size={size} color={color} {...props} />
  }
  if (model === 6) {
    return <VerticalBottom size={size} color={color} {...props} />
  }
  if (model === 7) {
    return <VerticalCenter size={size} color={color} {...props} />
  }
  if (model === 8) {
    return <VerticalTop size={size} color={color} {...props} />
  }
}
