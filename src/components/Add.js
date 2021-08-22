import React, { useState } from 'react'


const AddTaskLogs = () =>{

    const [values, setValues] = useState({
        addTaskGroupName : '',
        addTask: ''
    })
    const [addedTasks, addTasks]=useState([])
    const [TaskLog, setTaskLog]  = useState({
        TaskGroupName: null,
        Tasks: null
    })

    return(
        <div className="addTaskLogs">
            {console.log(addedTasks)}
            <AddTaskGroupName 
            handleChange={(e)=>{
                if(e.target.value === '')return
                setValues({...values, addTaskGroupName: e.target.value})}}
            value={values.addTaskGroupName}
            />
            <AddedTasks 
            addedTasks={addedTasks}
             />
            <AddTask
            value={values.addTask}
            handleChange={(e)=>
                {setValues({...values, addTask: e.target.value})}}
            handleKeyPress={(e)=>{
                if(e.key === 'Enter'){
                    if(values.addTask === '')return
                    e.preventDefault()
                    addTasks([...addedTasks, values.addTask])
                    setValues({...values, addTask:''})
                }
            }}
            />
            <RegisterTaskLogBtn
            handleSubmit={(e)=>{
                setTaskLog({
                    TaskGroupName: values.addTaskGroupName,
                    Tasks: addedTasks
                })
            }}
            />
            {console.log(TaskLog)}

        </div>
    )
}



const AddTaskGroupName = ({value, handleChange}) =>{
    return(
        <div className="addTaskGroupName">
            <input
            placeholder="タイトル"
            name="addTaskGroupName"
            value={value}
            onChange={handleChange}
            />
        </div>
    )
}

const AddTask = ({value, handleChange, handleKeyPress}) =>{
    return(
        <div className="addTask">
            <input
            placeholder="+   タスクを追加..."
            value={value}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            />
        </div>
    )
}

const AddedTasks = ({addedTasks}) =>{
    return(
        <div className="addedTasks">
            <ul>
                {Object.keys(addedTasks).map((addedTask, i) =>
                    <li key={i} className="addedTask">
                        {addedTasks[addedTask]}
                    </li>
                )}
            </ul>
        </div>
    )
}



const RegisterTaskLogBtn = ({handleSubmit}) =>{
    return(
    <div className="addTaskLogBtn">
        <p onClick={handleSubmit}>登録</p>
    </div>
    )
}
export default AddTaskLogs