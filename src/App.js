import React , {Component} from 'react';
import './style.scss';
import Add from './components/Add.js'


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            //主要
            TaskGroupName: '',
            Tasks : [],
            Data : [],
            //仮置き用
            addTaskGroupName: '',
            addedTasks: [],
            addTask: '',
            //判定用
            isEnterPressed : false,
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleEnterKey = (e) =>{
        if(e.key === 'Enter'){
            e.preventDefault()
            this.state.addedTasks.push(this.state.addTask)
            this.setState({
                isEnterPressed : true,
                addedTasks : this.state.addedTasks,
                addTask : ''
            })
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        //空判定
        if(this.state.addTaskGroupName === '') return
        //Stateの更新
        this.setState({
          TaskGroupName: this.state.addTaskGroupName,
          Tasks: this.state.addedTasks,
          addTaskGroupName : '',
          addedTasks : [],
          addedTask : '',
          isEnterPressed : false
        })
    }
    
    checkState = (e) =>{
        e.preventDefault()
        console.dir(this.state)
    }


    render(){
        return(
            <React.Fragment>
            <h1 className="AppName">TaskLog</h1>
            <Add 
            addTaskGroupName = {this.state.addTaskGroupName}
            addTask = {this.state.addTask}
            addedTasks = {this.state.addedTasks}
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            handleEnterKey = {this.handleEnterKey}
            isEnterPressed = {this.state.isEnterPressed}
            // test = {this.checkState}
            />
            </React.Fragment>
        )
    }
}

export default App;