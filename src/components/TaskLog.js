import React , { useState, useEffect }from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { store } from '../store/store'
import { updateTaskLog, deleteTaskLog, updateTaskGroupName, updateTask} from '../actions/actions'
import styled from 'styled-components'

const TaskLogs = () =>{
    const dispatch = useDispatch()
    const TaskLogs = useSelector(state=>state.TaskLogs)
    const [notice, setNotice] = useState("")
    const [task, setTask] =useState({})
    const [taskGroupName, setTaskGroupName] = useState({})
    const [value, setValue] =useState({})
    useEffect(()=>{
        store.subscribe(()=>{
            if(notice === ""){
                setNotice(1)
            }else{
                setNotice("")
            }
        })
    })
    return(
        <TaskLogsStyle>
            {Object.keys(TaskLogs).map((Log, i) => (
                <TaskLogStyle key={i}>
                    <TaskGroupName 
                    Name={TaskLogs[i]["TaskGroupName"]}
                    i={i}
                    handleClick={(e)=>{
                        e.preventDefault()
                        dispatch(deleteTaskLog(i))
                    }}
                    handleChange={(e)=>{
                        e.preventDefault()
                        setTaskGroupName({...taskGroupName, [e.target.name]:[e.target.value]})
                    }}
                    handleBlur={(e)=>{
                        e.preventDefault()
                        if(!Object.keys(taskGroupName).length)return''
                        dispatch(updateTaskGroupName(taskGroupName))
                        setTaskGroupName({})
                    }}
                    />
                    <ContentStyle>
                    <table>
                        <tbody>
                            <Dates Tasks={TaskLogs[i]["Tasks"]}/>
                        </tbody>
                            <TasknData
                            Tasks={TaskLogs[i]["Tasks"]}
                            i={i}
                            handleChange={(e)=>{
                                e.preventDefault()
                                setValue({...value, [e.target.name]:[e.target.value]})
                            }}
                            handleChange_a={(e)=>{
                                e.preventDefault()
                                setTask({...task, [e.target.name]:[e.target.value]})
                            }}
                            handleBlur={(e)=>{
                                e.preventDefault()
                                if(!Object.keys(value).length)return''
                                dispatch(updateTaskLog(value))
                                setValue({})
                            }}
                            handleBlur_a={(e)=>{
                                e.preventDefault()
                                if(!Object.keys(task).length)return''
                                dispatch(updateTask(task))
                                setTask({})
                            }}
                            />
                    </table>

                    </ContentStyle>
                </TaskLogStyle>
            ))}

        </TaskLogsStyle>
    )
}

const TaskGroupName = ({Name, handleChange,handleBlur,handleClick,i}) =>{
    return(
        <TaskGroupNameStyle>
            <div key={Name}>
            <input name={i} defaultValue={Name} onChange={handleChange} onBlur={handleBlur}/>
            <button onClick={handleClick}>削除</button>
            </div>
        </TaskGroupNameStyle>
    )
}

const Dates = ({Tasks}) =>{
    let Task=Tasks[0]["Date"]
    return(
        <DatesStyle>
            <BlankStyle></BlankStyle>
            {Object.keys(Task).map((date, j) =>(
                <DateStyle key={j}>{date}</DateStyle>
            ))}
        </DatesStyle> 
    )
}
const TasknData = ({Tasks, handleChange, handleBlur, handleChange_a, handleBlur_a, i}) =>{
    return(
        <tfoot >
            {Object.keys(Tasks).map((Task, j) =>(
                <TasknDataStyle key={j}>
                <TaskStyle>
                    <div key={Tasks[j]["Task"]}>
                    <input 
                    name={i+"-"+j}
                    defaultValue={Tasks[j]["Task"]} 
                    onBlur={handleBlur_a}
                    onChange={handleChange_a}
                    />
                    </div>
                </TaskStyle>
                {Object.keys(Tasks[j]["Date"]).map((key, k)=>(
                    <DataStyle key={k}>
                        <div key={Tasks[j]["Date"][key]}>
                            <input 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name={i+"-" + j + "-"+key}
                            defaultValue={Tasks[j]["Date"][key]}
                            />
                        </div>
                    </DataStyle>
                    ))}
            </TasknDataStyle>
            ))}
        </tfoot>
    )
}


//Styled-Components-CSS
const TaskLogsStyle = styled.div`

`;

const TaskLogStyle = styled.div`
    width: 720px;
    margin: auto;
    margin-top: 50px;
    border-radius: 10px;
    border: 0.6px solid #4F5052;
    box-shadow: 0px 0px 10px 7px #0D0D0D66;
    color: white;
`;

const TaskGroupNameStyle = styled.div`
    font-size: 24px;
    padding: 24px 10px 24px 31px;
    input{
        border: none;
        font-size: 24px;
        color: white;
        width: 90%;
        background-color: transparent;
        outline: none;
    }
    button{
        float: right;
    }
`;

const ContentStyle = styled.div`
    margin-bottom: 22px;
    overflow-x: auto;
    width: 600px;
    scrollbar-arrow-color: none;
    width: 100%;
    ::-webkit-scrollbar {
        display: none;
    }
    table{
        border-collapse: collapse;
    }
`;

const DatesStyle = styled.tr``;

const DateStyle = styled.th`
    font-weight: normal;
    border: 0.3px solid #4F5052;
    font-size: 17px;
    background-color: #4F5052;
    border-top: none;
    font-size: 17px;
    padding: 8px 23px
`;

const BlankStyle = styled.th`
    border: none;
`;

const TasknDataStyle = styled.tr``;
const TaskStyle = styled.th`
    font-weight: normal;
    border: 0.3px solid #4F5052;
    font-size: 17px;
    white-space: nowrap;
    position: sticky;
    left: 0;
    z-index: 1;
    font-size: 19px;
    padding-top: 7px;
    border-left: none;
    background-color: #4F5052;
    text-align: center;
    input{
        font-weight: normal;
        width: 200px;
        border: none;
        outline: 0;
        font-size: 19px;
        text-align: center;
        color: white;
        background-color: transparent;
    }
`;
const DataStyle = styled.td`
    font-weight: normal;
    border: 0.3px solid #4F5052;
    font-size: 17px;
    text-align: center;
    div{
    }
    input{
        width: 40px;
        font-size: 16px;
        color: white;
        margin: auto;
        text-align: right;
        border: none;
        outline: none;
        background-color: transparent;
    }
`;

export default TaskLogs