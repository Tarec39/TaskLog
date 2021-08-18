import React from 'react'

const TaskLogs = (props) =>{
    const { TaskGroupName, Dates, Tasks} = props
    console.log({Dates})
    return(
        <ul className="TaskLogs">
            <li className="TaskLog">
                <div><p className="TaskGroupName">{TaskGroupName}</p></div>
                <div className="Content">
                    <ul className="Data">
                    {Dates[1].map((Date)=>
                            <li className="Column">
                                <div className="Date">{Date}</div>
                                <ul className="Values">
                                    <li className="Value">0:27</li>
                                    <li className="Value">19:15</li>
                                    <li className="Value">1:57</li>
                                    <li className="Value">8:21</li>
                                    <li className="Value">32:00</li>
                                </ul>
                            </li>
                        )}
                    </ul>
                    <OutputTasks Tasks={Tasks}/>
                </div>
            </li>
        </ul>
    )
}

const OutputTasks = ({Tasks}) =>{
    console.log({Tasks})
    return(
        <ul className="Tasks">
            {Tasks.map((Task)=>(
                <li className="Task">{Task}</li>
            ))}
        </ul>
    )
}
export default TaskLogs;