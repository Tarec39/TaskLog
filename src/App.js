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
            <React.Fragment>
            {/* <h1 className="AppName">TaskLog</h1> */}
            <AddTaskLogs />
            </React.Fragment>
        )
    }
}

export default App;