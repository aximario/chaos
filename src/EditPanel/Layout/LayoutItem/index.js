import React from 'react'
import styled from 'styled-components'
import View from '../../../lib/View'
import Icon from '../../../lib/Icon'

const SView = styled(View)`
  cursor: pointer;
`

export default function LayoutItem ({ src, onClick }) {
  return (
    <SView w="24px" h="24px" verticalAlign="center" horizontalAlign="center" onClick={onClick}>
      <Icon src={src} size="16px" />
    </SView>
  )
}
