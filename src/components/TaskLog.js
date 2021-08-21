import React from 'react'

const TaskLogs = (props) =>{
    const { TaskGroupName, Dates, Tasks} = props
    console.log(Dates)
    return(
        <ul className="TaskLogs">
            <li className="TaskLog">
                <p className="TaskGroupName">{TaskGroupName}</p>
                <div className="Content">
                    <OutputDates Dates={Dates}/>
                    <OutputTasks Tasks={Tasks}/>
                </div>
            </li>
        </ul>
    )
}
const OutputDates = ({Dates}) =>{
    if(Object.keys(Dates).length !== 0){
        return(
            <ul className="Data">
                {Object.keys(Dates).map((Date, i) => (
                <li className="Column" key={i}>
                    <div className="Date">{Dates[Date]}</div>
                    {/* <ul className="Values">
                        <li className="Value">0:27</li>
                        <li className="Value">19:15</li>
                        <li className="Value">1:57</li>
                        <li className="Value">8:21</li>
                        <li className="Value">32:00</li>
                    </ul> */}
                </li>
                ))}
            </ul>
        )
    }else{
        return ''
    }
}
const OutputTasks = ({Tasks}) =>{
    return(
        <ul className="Tasks">
            {Tasks.map((Task, key)=>(
                <li key={key} className="Task">{Task}</li>
            ))}
        </ul>
    )
}

const OutputData = ({Dates}) =>{
    
}
export default TaskLogs;