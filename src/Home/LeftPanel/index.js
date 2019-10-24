import React, { useContext } from 'react'
import View from './View'
import Text from './Text'
import { StoreContext } from '../../App'

export default function LeftPanel () {
  const { dispatch } = useContext(StoreContext)

  function handleViewClick () {
    dispatch({ type: 'addViewToContent' })
  }

  function handleTextClick () {
    dispatch({ type: 'addTextToContent' })
  }
  return (
    <div>
      <View onClick={handleViewClick} />
      <Text onClick={handleTextClick} />
    </div>
  )
}