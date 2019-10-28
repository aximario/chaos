import React, { useContext } from 'react'
import View from '../../prototypes/components/View'
import { StoreContext } from '../../App'
import InputItem from './InputItem'

export default function RightPanel () {
  const { state: { currentComponent }, dispatch } = useContext(StoreContext)

  function handlePropsChange (v) {
    return event => {
      dispatch({
        type: 'changeProps',
        payload: {
          id: currentComponent.id,
          props: {
            name: v.name,
            value: event.target.value.trim()
          }
        }
      })
    }
  }

  return (
    <View width="300px" height="100vh" column>
      {currentComponent && currentComponent.props.map((v, i) => (
        <InputItem
          key={i}
          value={v.value}
          label={v.name}
          onChange={handlePropsChange(v)}
        />
      ))}
    </View>
  )
}
