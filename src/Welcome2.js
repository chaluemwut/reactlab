import {Component} from 'react'
import {subject} from './Service'

export default class Welcome2 extends Component {
    render(){
        return <div>
            Welcome2 
            <button onClick={() => {
                subject.next('Click me')
            }}>click me</button>            
        </div>
    }
}