import React from 'react'

const AddTaskLogs = () =>{
    return(
        <div className="addTaskLogs">
            <div className="addTaskGroupName">
                <input
                placeholder="タイトル"
                />
            </div>
            <div className="addedTasks">
                <ul>
                    <li className="addedTask">
                        asdasdas
                    </li>
                </ul>
            </div>
            <div className="addTask">
                <input
                placeholder="+   タスクを追加..."
                />
            </div>
            <div className="addTaskLogBtn">
                <p>登録</p>
            </div>
        </div>
    )
}

export default AddTaskLogs