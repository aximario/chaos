import { View, Text } from './prototypes'
import { replaceArrayItem } from './utils'

export default function reducer (state, action) {
  switch (action.type) {
    case 'addViewToContent': {
      return {
        ...state,
        content: state.content.concat(new View())
      }
    }
    case 'addTextToContent': {
      return {
        ...state,
        content: state.content.concat(new Text())
      }
    }
    case 'chooseComponent': {
      return {
        ...state,
        currentComponent: action.payload
      }
    }
    case 'changeProps': {
      const { payload: { id, props } } = action
      const item = state.content.find(v => v.id === id)
      const itemIndex = state.content.findIndex(v => v.id === id)
      const prop = item.props.find(v => v.name === props.name)
      const propIndex = item.props.findIndex(v => v.name === props.name)
      const newCurrentComponent = {
        ...item,
        props: replaceArrayItem(item.props, propIndex, { ...prop, ...props })
      }
      return {
        ...state,
        content: replaceArrayItem(state.content, itemIndex, newCurrentComponent),
        currentComponent: newCurrentComponent
      }
    }
    default: throw new Error('no such action')
  }
}