import uuid from 'uuid'
import ViewComponent from '../components/View'

export default class View {
  constructor () {
    this.id = uuid.v4()
    this.component = ViewComponent
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
        name: 'backgroundColor',
        value: '#aaa',
        configurable: true
      },
      {
        name: 'column',
        value: false,
        configurable: true
      }
    ]
  }
}