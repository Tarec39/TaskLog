import React from 'react';

const AddTaskLog = (props)=>{
    const { addTaskGroupName, addTask, addedTasks, handleChange, handleSubmit, handleEnterKey , isEnterPressed} = props
    return(
        <div className="addTaskLog">
            <form>
                <AddTaskGroupName
                value={addTaskGroupName}
                onChange={handleChange}
                />
                {isEnterPressed === true &&
                <AddedTasks addedTasks={addedTasks}/>
                }
                <AddTasks
                value={addTask}
                onChange={handleChange}
                onKeyPress={handleEnterKey}
                addedTasks={addedTasks}
                />

                <button type="submit" onClick={handleSubmit}>登録</button>
            </form>
            {/* <LogBtn onClick={test}/> */}
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
const AddTasks = ({value, onChange, onKeyPress}) =>{
    return(
        <div className="addTasks">
            <input
            type="text"
            name="addTask"
            className="addTask"
            placeholder="+ タスクを追加"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            />
        </div>
    )
}

const AddedTasks = ({addedTasks}) =>{
    return(
        <ul className="addedTasks">
            {Object.keys(addedTasks).map((key, i) =>(
                <li key={i}>{addedTasks[key]}</li>
            ))}
        </ul>
    )
}

// const LogBtn = ({onClick}) =>{
//     return(
//         <div>
//             <button onClick={onClick}>LOG</button>
//         </div>
//     )
// }
export default AddTaskLog;