import { Component } from 'react'
import {store} from './ReduxService'

export default class Welcome3 extends Component {
    render() {
        return <div>
            Welcome 3
            <button onClick={() => {
                store.dispatch({type: 'aa'})
            }}>click 3</button>
        </div>
    }
}