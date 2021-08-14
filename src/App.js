import React , {Component} from 'react';
import './style.scss';
import Add from './components/Add.js'


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            TaskGroupName: '',
            Tasks : [],
            Data : [],
            addTaskGroupName: '',
            addTask: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        if(this.state.addTask === '') return

        this.state.Tasks.push(this.state.addTask)

        this.setState({
          TaskGroupName: this.state.addTaskGroupName,
          Tasks : this.state.Tasks,
          addTaskGroupName: '',
          addTask: ''
        })
        console.log('タイトル: ' + this.state.TaskGroupName + '\nタスク: '+this.state.Tasks)
    }
    


    render(){
        return(
            <React.Fragment>
            <h1 className="AppName">TaskLog</h1>
            <Add 
            addTaskGroupName = {this.state.addTaskGroupName}
            addTask = {this.state.addTask}
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            />
            </React.Fragment>
        )
    }
}

export default App;