import React from 'react';

const AddTaskLog = (props)=>{
    return(
        <div className="addTaskLog">
            <form  onClick={props.handleSubmit}>

                <AddTaskGroupName
                value={props.addTaskGroupName}
                onChange={props.handleChange}
                />
                <AddTasks
                value={props.addTask}
                onChange={props.handleChange}
                />
                <button type="submit">記録</button>
            </form>
        </div>
    )
}
const AddTaskGroupName = ({value, onChange}) =>{
    return(
        <input
        className="addTaskGroupName"
        name="addTaskGroupName"
        type="text"
        placeholder="タイトル"
        value={value}
        onChange={onChange} 
        />
    )
}
const AddTasks = ({value, onChange}) =>{
    return(
        <ul className="addTasks">
            <li>
                <input
                type="text"
                name="addTask"
                className="addTask"
                placeholder="+ タスクを追加"
                value={value}
                onChange={onChange}
                />
            </li>
        </ul>
    )
}

export default AddTaskLog;