import React from 'react'
// import styled from 'styled-components'
import Label from '../lib/Label'

export function PropLabel ({ children }) {
  return (
    <Label
      w="20px"
      h="20px"
      fs="16px"
      lh="20px"
      ta="center"
    >{children}</Label>
  )
}
