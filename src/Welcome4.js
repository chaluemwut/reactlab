import { Component } from 'react'
import { store } from './ReduxService'

export default class Welcome4 extends Component {
    render() {
        return <div>
            Hello Welcome 4
            <button onClick={() => {
                store.dispatch({ type: 'bb' })
            }}>click me 4</button>
        </div>
    }
}