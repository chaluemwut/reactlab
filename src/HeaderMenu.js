import { Component } from 'react'
import { store } from './ReduxService'

export class Menu extends Component {

    render() {
        return <div style={{ backgroundColor: "red" }}>
            <p>Menu</p>
            <button className="btn btn-primary" onClick={() => store.dispatch({ type: 'aa' })}>click 1</button>
            <button className="btn btn-primary" onClick={() => store.dispatch({ type: 'bb' })} style={{ marginLeft: "10px" }}>click 2</button>
        </div>
    }

}

export default Menu