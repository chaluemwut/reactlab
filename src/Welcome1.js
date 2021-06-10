import {Component} from 'react'
import {subject} from './Service'

export default class Welcome1 extends Component {

    state={data1: 'xxx'}

    componentDidMount(){
        this.subscription = subject.subscribe(res => {
            console.log('Welcome 1 subscription....')
            console.log(res)
        })
    }
    
    render(){
        return <div>
            Welcome 1
            {/* Welcome 1 {this.props.name} */}

            {this.state.data1}

            <button onClick={() => {
                console.log('click me')
                this.setState({data1: 'zzz'})
            }}>click me</button>        
        </div>
    }
}