export default function reducer (state, action) {
  switch (action.type) {
    case 'addViewToContent': {
      return {
        ...state,
        content: state.content.concat({
          type: 'View',
          props: {}
        })
      }
    }
    case 'addTextToContent': {
      return {
        ...state,
        content: state.content.concat({
          type: 'Text',
          props: {}
        })
      }
    }
    default: throw new Error('no such action')
  }
}