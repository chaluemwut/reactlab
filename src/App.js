import { Component } from 'react'
import { Menu } from './HeaderMenu'
import { store } from './ReduxService'

export default class MainApp extends Component {
  state = { mainValue: 0 }
  
  componentDidMount() {
    store.subscribe(() => {
      this.setState({ mainValue: store.getState().value })
    })
  }

  render() {
    return <div>
      {this.state.mainValue}
      <Menu />
    </div>
  }

}
