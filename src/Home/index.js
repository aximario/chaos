import React from 'react'
import View from '../prototypes/components/View'
import LeftPanel from './LeftPanel'
import Content from './Content'
import RightPanel from './RightPanel'

export default function Home () {
  return (
    <View horizontalAlign="between">
      <LeftPanel />
      <Content />
      <RightPanel />
    </View>
  )
}