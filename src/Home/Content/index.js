import React, { useContext } from 'react'
import { StoreContext } from '../../App'

export default function Content () {
  const { state, dispatch } = useContext(StoreContext)

  function handleComponentClick (component) {
    return () => {
      dispatch({
        type: 'onChooseComponent',
        payload: component
      })
    }
  }

  return (
    <div>
      {state.content.map(v => {
        const Component = v.component
        const props = {}
        v.props.forEach(k => {
          props[k.name] = k.value
        })
        return (
          <Component
            key={v.id}
            onClick={handleComponentClick(v)}
            {...props}
          />
        )
      })}
    </div>
  )
}