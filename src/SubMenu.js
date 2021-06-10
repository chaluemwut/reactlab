import { Component } from 'react'
import { store } from './ReduxService'

export default class SubMenu extends Component {
    render() {
        return <div style={{ backgroundColor: "green" }}>
            Hello sub menu
            <button className="btn btn-primary"
                onClick={() => {
                    store.dispatch({ type: 'aa' })
                }}
            >click me</button>
        </div>
    }
}