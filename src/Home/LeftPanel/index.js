import React, { useContext } from 'react'
import ViewSelector from './ViewSelector'
import TextSelector from './TextSelector'
import { StoreContext } from '../../App'
import View from '../../prototypes/components/View'

export default function LeftPanel () {
  const { dispatch } = useContext(StoreContext)

  function handleViewClick () {
    dispatch({ type: 'addViewToContent' })
  }

  function handleTextClick () {
    dispatch({ type: 'addTextToContent' })
  }
  return (
    <View column width="200px" height="100vh">
      <ViewSelector onClick={handleViewClick} />
      <TextSelector onClick={handleTextClick} />
    </View>
  )
}