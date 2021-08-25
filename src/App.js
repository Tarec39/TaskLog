import React , {Component} from 'react';
import AddTaskLogs from './components/Add.js'
import TaskLogs from './components/TaskLog'

class App extends Component{
    render(){
        return(
            <React.Fragment>
                <AddTaskLogs/>
                <TaskLogs/>
            </React.Fragment>
            )
    }
}

export default App;