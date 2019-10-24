import React, { useContext } from 'react'
import { StoreContext } from '../../App'
import components from '../components'

export default function Content () {
  const { state } = useContext(StoreContext)
  return (
    <div>
      {state.content.map(v => {
        const component = components[v.type]
        const Component = component ? component.component : null
        return <Component {...component.props} />
      })}
    </div>
  )
}