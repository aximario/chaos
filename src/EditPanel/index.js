import React from 'react'
import View from '../lib/View'
import { PropLabel } from '../components/Typography'
import Input from '../lib/Input'
import Icon from '../lib/Icon'
import BorderRadius from '../images/BorderRadius.svg'
import HorizontalLeft from '../images/HorizontalLeft.svg'
import HorizontalCenter from '../images/HorizontalCenter.svg'
import HorizontalRight from '../images/HorizontalRight.svg'
import VerticalTop from '../images/VerticalTop.svg'
import VerticalCenter from '../images/VerticalCenter.svg'
import VerticalBottom from '../images/VerticalBottom.svg'

export default function EditPanel () {
  return (
    <View
      w="240px"
      column
    >
      <View>
        <View h="30px" verticalAlign="center">
          <PropLabel>W</PropLabel>
          <Input w="60px" />
        </View>
        <View h="30px" verticalAlign="center">
          <PropLabel>H</PropLabel>
          <Input w="60px" />
        </View>
      </View>
      <View h="30px" verticalAlign="center">
        <PropLabel>border</PropLabel>
        <Input />
      </View>
      <View h="30px" verticalAlign="center">
        <PropLabel>
          <Icon src={BorderRadius} size="16px" />
        </PropLabel>
        <Input />
      </View>
      <View h="30px" verticalAlign="center">
        <View w="24px" h="24px" verticalAlign="center" horizontalAlign="center">
          <Icon src={HorizontalLeft} size="16px" />
        </View>
        <View w="24px" h="24px" verticalAlign="center" horizontalAlign="center">
          <Icon src={HorizontalCenter} size="16px" />
        </View>
        <View w="24px" h="24px" verticalAlign="center" horizontalAlign="center">
          <Icon src={HorizontalRight} size="16px" />
        </View>
        <View w="24px" h="24px" verticalAlign="center" horizontalAlign="center">
          <Icon src={VerticalTop} size="16px" />
        </View>
        <View w="24px" h="24px" verticalAlign="center" horizontalAlign="center">
          <Icon src={VerticalCenter} size="16px" />
        </View>
        <View w="24px" h="24px" verticalAlign="center" horizontalAlign="center">
          <Icon src={VerticalBottom} size="16px" />
        </View>
      </View>
    </View>
  )
}