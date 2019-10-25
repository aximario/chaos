import React from 'react'
import View from '../../prototypes/models/view'
import Icon from '../../components/Icon'

export default function IconItem ({ model, size, color }) {
  return (
    <View
      column
      horizontalAlign="center"
    >
      <Icon model={model} size={size} color={color} />
      <span>{model}</span>
    </View>
  )
}