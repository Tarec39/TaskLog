import React , {Component} from 'react';
import './style.scss';
import AddTaskLogs from './components/Add.js'
import TaskLogs from './components/TaskLog'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            sample : ''
        }
    }
    render(){
        return(
            <React.Fragment>
            <AddTaskLogs />
            <TaskLogs/>
            </React.Fragment>
        )
    }
}

export default App;