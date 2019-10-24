import View from '../prototypes/View'
import Text from '../prototypes/Text'

export default {
  View: {
    component: View,
    props: {
      width: '100px',
      height: '100px',
      backgroundColor: '#aaa'
    },
    config: {
      width: '100px',
      height: '100px',
      backgroundColor: '#aaa'
    }
  },
  Text: {
    component: Text,
    props: {
      children: 'Text'
    },
    config: {
      children: 'Text'
    },
  }
}