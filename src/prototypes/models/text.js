import uuid from 'uuid'
import TextComponent from '../components/Text'

export default class Text {
  constructor () {
    this.id = uuid.v4()
    this.component = TextComponent
    this.props = [
      {
        name: 'width',
        value: '100px',
        configurable: true
      },
      {
        name: 'height',
        value: '100px',
        configurable: true
      },
      {
        name: 'children',
        value: 'Text',
        configurable: true
      }
    ]
  }
}