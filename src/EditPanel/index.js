import React from 'react'
import View from '../lib/View'
import { PropLabel } from '../components/Typography'
import Input from '../lib/Input'
import Icon from '../lib/Icon'
import BorderRadius from '../images/BorderRadius.svg'

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
          <Icon src={BorderRadius} size="20px" />
        </PropLabel>
        <Input />
      </View>
    </View>
  )
}