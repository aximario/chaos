import React from 'react'
import styled from 'styled-components'

const Wrap = styled.span`
  display: inline-block;
  padding: 12px;
  ${props => props.disabled && 'opacity: 0.5;'}
`

const Content = styled.img`
  width: 24px;
  height: 24px;
`

export default function Icon ({ src, disabled }) {
  return (
    <Wrap disabled={disabled}>
      <Content src={src} />
    </Wrap>
  )
}
