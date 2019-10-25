import { View, Text } from './prototypes'

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
    default: throw new Error('no such action')
  }
}