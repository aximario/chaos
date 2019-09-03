import React from 'react'
import View from '../../lib/View'
import LayoutItem from './LayoutItem'
import HorizontalLeft from './images/HorizontalLeft.svg'
import HorizontalCenter from './images/HorizontalCenter.svg'
import HorizontalRight from './images/HorizontalRight.svg'
import VerticalTop from './images/VerticalTop.svg'
import VerticalCenter from './images/VerticalCenter.svg'
import VerticalBottom from './images/VerticalBottom.svg'
import HorizontalBetween from './images/HorizontalBetween.svg'
import VerticalBetween from './images/VerticalBetween.svg'



export default function Layout () {
  return (
    <View h="30px" verticalAlign="center" horizontalAlign="between">
      <LayoutItem src={HorizontalLeft} />
      <LayoutItem src={HorizontalCenter} />
      <LayoutItem src={HorizontalRight} />
      <LayoutItem src={VerticalTop} />
      <LayoutItem src={VerticalCenter} />
      <LayoutItem src={VerticalBottom} />
      <LayoutItem src={HorizontalBetween} />
      <LayoutItem src={VerticalBetween} />
    </View>
  )
}
