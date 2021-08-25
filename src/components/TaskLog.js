import React, {useState} from 'react'
import { TaskLogContext } from './Add'

const TaskLogs = () =>{
    const Obj = React.useContext(TaskLogContext)
    const [useTaskLog, setTaskLog] = useState([])

    const isEmpty = () =>{
        if(Obj.TaskGroupName === null || Object.keys(Obj.Tasks).length === 0){
            console.log("空")
        }else{
            console.log("入っている")
            setTaskLog(Obj)
        }
    }
    return(
        <div className="TaskLog">
            {/* 空判定 */}
            {console.log(useTaskLog)}
            {isEmpty()}
            <TaskGroupName Name={Obj.TaskGroupName}/>
            <div className="Content">
            <table>
                <tr className="Dates">
                    <th className="Blank"></th>
                    <th className="Date">8/1</th>
                    <th className="Date">8/2</th>
                    <th className="Date">8/3</th>
                    <th className="Date">8/4</th>
                    <th className="Date">8/5</th>
                    <th className="Date">8/6</th>
                    <th className="Date">8/7</th>
                    <th className="Date">8/7</th>
                    <th className="Date">8/7</th>
                    <th className="Date">8/7</th>
                    <th className="Date">8/7</th>
                    <th className="Date">8/7</th>
                    <th className="Date">8/7</th>
                    <th className="Date">8/7</th>
                    <th className="Date">8/7</th>
                </tr>
                <tr className="TasknData">
                    <th className="Task">サンプルタスク①</th>
                    <td className="Data"><input/></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                </tr>
                <tr className="TasknData">
                    <th className="Task">サンプルタスク①</th>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                </tr>
                <tr className="TasknData">
                    <th className="Task">サンプルタスク①</th>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                </tr>
                <tr className="TasknData">
                    <th className="Task">サンプルタスク①</th>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                </tr>
                <tr className="TasknData">
                    <th className="Task">サンプルタスク①</th>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                </tr>
                <tr className="TasknData">
                    <th className="Task">サンプルタスク①</th>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                </tr>
                <tr className="TasknData">
                    <th className="Task">サンプルタスク①</th>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                </tr>
                <tr className="TasknData">
                    <th className="Task">サンプルタスク①</th>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                </tr>
                <tr className="TasknData">
                    <th className="Task">サンプルタスク①</th>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                    <td className="Data"></td>
                </tr>

            </table>
            </div>

        </div>
    )
}

const TaskGroupName = ({Name}) =>{
    return(
        <div class="TaskGroupName">{Name}</div>
    )
}
export default TaskLogs