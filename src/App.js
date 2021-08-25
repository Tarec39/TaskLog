import React , {Component} from 'react';
import './style.scss';
import AddTaskLogs from './components/Add.js'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            sample : ''
        }
    }
    render(){
        return(
            <AddTaskLogs />
        )
    }
}

export default App;