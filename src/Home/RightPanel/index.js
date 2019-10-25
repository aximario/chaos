import React, { useContext } from 'react'
import View from '../../prototypes/components/View'
import { StoreContext } from '../../App'

export default function RightPanel () {
  const { state } = useContext(StoreContext)
  return (
    <View width="300px" height="100vh" column>
      {state.currentComponent && state.currentComponent.props.map((v, i) => (
        <div key={i}>
          <span>{v.name}</span>
          <input value={v.value} />
        </div>
      ))}
    </View>
  )
}
