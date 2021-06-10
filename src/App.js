import { Component } from 'react'
import Welcome1 from './Welcome1'
import Welcome2 from './Welcome2'
import { Subject } from 'rxjs'
import Welcome3 from './Welcome3'
import Welcome4 from './Welcome4'

import { store } from './ReduxService'

export default class MainApp extends Component {

  componentDidMount() {
    store.subscribe(() => {
      // console.log('on main page...')
      // console.log(store)
      console.log(store.getState().value)
    })
  }

  render() {
    return <div>
      <div>
        <Welcome3 />
      </div>

      <div>
        <Welcome4 />
      </div>
    </div>
  }
}
