export function size (props, styleObj) {
  if (props.w) styleObj.width = props.w
  if (props.h) styleObj.height = props.h
  return styleObj
}

export function typography (props, styleObj) {
  if (props.fontFamily) styleObj.fontFamily = props.fontFamily
  if (props.fontWeight) styleObj.fontWeight = props.fontWeight
  if (props.fontSize) styleObj.fontSize = props.fontSize
  if (props.textAlign) styleObj.textAlign = props.textAlign
  if (props.lineHeight) styleObj.lineHeight = props.lineHeight
  return styleObj
}

export function border (props, styleObj) {
  if (props.radius) styleObj.radius = props.radius
  if (props.border) styleObj.border = props.border
  return styleObj
}

export function compose (props, enhancers) {
  return enhancers.reduce((acc, cur) => cur(props, acc))
}