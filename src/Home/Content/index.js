import React, { useContext } from 'react'
import { StoreContext } from '../../App'
import View from '../../prototypes/View'
import Text from '../../prototypes/Text'

export default function Content () {
  const { state } = useContext(StoreContext)
  return (
    <div>
      {state.content.map(v => {
        if (v.type === 'View') {
          return (
            <View />
          )
        }
        if (v.type === 'Text') {
          return (
            <Text></Text>
          )
        }
        return null
      })}
    </div>
  )
}