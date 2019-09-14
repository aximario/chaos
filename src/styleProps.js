// height
export function h (props) {
  return props.h && `height: ${props.h};`
}

// margin
export function m (props) {
  return props.m && `margin: ${props.m};`
}

// padding
export function p (props) {
  return props.p && `padding: ${props.p};`
}

// width
export function w (props) {
  return props.w && `width: ${props.w};`
}

// font-family
export function ff (props) {
  return props.ff && `font-family: ${props.ff};`
}

// font-weight
export function fw (props) {
  return props.fw && `font-weight: ${props.fw};`
}

// font-size
export function fs (props) {
  return props.fs && `font-size: ${props.fs};`
}

// line-height
export function lh (props) {
  return props.lh && `line-height: ${props.lh};`
}

// text-align
export function ta (props) {
  return props.ta && `text-align: ${props.ta};`
}

// border-radius
export function br (props) {
  return props.br && `border-radius: ${props.br};`
}

// border
export function b (props) {
  return props.b && `border: ${props.b};`
}

// color
export function c (props) {
  return props.c && `color: ${props.c};`
}

// background
export function bg (props) {
  return props.bg && `background: ${props.bg};`
}

// justify-content
export function jc (props) {
  return props.jc && `justify-content: ${props.jc};`
}

// align-items
export function ai (props) {
  return props.ai && `align-items: ${props.ai};`
}

// flex-direction
export function fd (props) {
  return props.fd && `flex-direction: ${props.fd};`
}
