import React , {Component} from 'react';
import './style.scss';
import AddTaskLog from './components/AddTaskLog'
import TaskLogs from './components/TaskLog'
import Test from './components/test'
class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            //仮置き用
            addTaskGroupName: '',
            addedTasks: [],
            addTask: '',
            //判定用
            isEnterPressed : false,
            //主要情報
            CreatedDate : '',
            Dates: [],
            TaskGroupName: '',
            Tasks : [],
            Data : [],
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
          CreatedDate : '',//ここがポイント
          Dates: [this.formatDates()],//ここがポイント
          isEnterPressed : false
        })
    }
    formatMonth = () =>{
        let MonthString = ['January','February','March','April','May','June','July','August','September','October','November','December']
        let MonthInt = new Date()
        MonthInt = MonthInt.getMonth()
        return MonthString[MonthInt];
    }
    formatDates = () =>{
        let FirstDay = new Date()
        FirstDay = FirstDay.getDate()
        let EndsDay = FirstDay+6
        let Dates = []
        for(var i=FirstDay; i<=EndsDay; i++){
            Dates.push(["8/"+i, ''])
        }
        return Dates;
    }
    checkState = () =>{
        console.log(this.state);
    }

    render(){
        return(
            <React.Fragment>
            <h1 className="AppName">TaskLog</h1>

            <AddTaskLog
            addTaskGroupName = {this.state.addTaskGroupName}
            addTask = {this.state.addTask}
            addedTasks = {this.state.addedTasks}
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            handleEnterKey = {this.handleEnterKey}
            isEnterPressed = {this.state.isEnterPressed}
            />
            <TaskLogs
            TaskGroupName={this.state.TaskGroupName}
            Dates={this.state.Dates}
            Tasks={this.state.Tasks}
            />
            <div>
                <Test/>
            </div>
            </React.Fragment>
        )
    }
}

export default App;