import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTaskLog } from '../actions/actions'
import styled from 'styled-components'

const Form = () =>{
    //Dispatch
    const dispatch = useDispatch()

    //格納用
    const [values, setValues] = useState({
        addTaskGroupName : '',
        addTask: ''
    })
    const [addedTasks, setAddedTasks] = useState([])

    //関数
    const createDate = () =>{
        let Dates = new Date()
        return (Dates.getFullYear()+'/'+(Dates.getMonth()+1)+'/'+ Dates.getDate());
    }

    const initializeState = () =>{
        setValues({addTaskGroupName: '', addTask:''})
        setAddedTasks([])
    }
    return(
            <AddTaskLogStyle>
                {/* TaskGroupNameを入力*/}
                <AddTaskGroupName 
                handleChange={(e)=>{
                    if(e.target.value === '')return
                    setValues({...values, addTaskGroupName: e.target.value})}}
                value={values.addTaskGroupName}
                />

                {/* AddedTasksを出力 */}
                <AddedTasks 
                addedTasks={addedTasks}
                 />
                
                {/* AddTaskを入力、AddedTasksに追加、追加後にAddTaskを初期化 */}
                <AddTask
                value={values.addTask}
                // AddTaskの入力
                handleChange={(e)=>
                    {setValues({...values, addTask: e.target.value})}}
                //AddedTasksへの追加、及びAddTaskの初期化
                handleKeyPress={(e)=>{
                    if(e.key === 'Enter'){
                        if(values.addTask === '')return
                        e.preventDefault()
                        //現段階では動作確認ができないため、上記の内容をに分割して行う。
                        //単一の処理を確認できるようになれば、そちらを採用する。
                        setAddedTasks([...addedTasks, values.addTask])
                        setValues({...values, addTask:''})
                    }
                }}
                />

                {/* 入力内容を反映させる手続き */}
                <TaskLogRegister
                handleSubmit={()=>{
                    if(values.TaskGroupName === "" || addedTasks.length === 0){
                        return null
                    }
                    //taskLogに入力内容を格納
                    const taskLog = {
                        CreatedDate : createDate(),
                        TaskGroupName: values.addTaskGroupName,
                        Tasks: addedTasks
                    }
                    //ADD_TASKLOGをDispatch
                    dispatch(addTaskLog(taskLog))
                    //初期化
                    initializeState()
                }}
                />
            </AddTaskLogStyle>
    )
}


// Small-Components
const AddTaskGroupName = ({value, handleChange}) =>{
    return(
        <AddTaskGroupNameStyle>
            <input
            placeholder="タイトル"
            name="addTaskGroupName"
            value={value}
            onChange={handleChange}
            />
        </AddTaskGroupNameStyle>
    )
}

const AddedTasks = ({addedTasks}) =>{
    return(
        <AddedTasksStyle>
            <ul>
                {Object.keys(addedTasks).map((addedTask, i) =>
                    <li key={i} className="addedTask">
                        {addedTasks[addedTask]}
                    </li>
                )}
            </ul>
        </AddedTasksStyle>
    )
}

const AddTask = ({value, handleChange, handleKeyPress}) =>{
    return(
        <AddTaskStyle>
            <input
            placeholder="+   タスクを追加..."
            value={value}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            />
        </AddTaskStyle>
    )
}

const TaskLogRegister = ({handleSubmit}) =>{
    return(
    <TaskLogRegisterStyle>
        <p onClick={handleSubmit}>登録</p>
    </TaskLogRegisterStyle>
    )
}

//Styled-Component-CSS
const AddTaskLogStyle = styled.div`
    width: 541px;
    margin: auto;
    border-radius: 10px;
    border: 0.6px solid #BCBCBC;
    box-shadow: 0px 0px 10px 7px #0D0D0D66;
`;

const AddTaskGroupNameStyle = styled.div`
    padding: 15px 0 15px 20px;
    input{
        width: 99%;
        font-size: 24px;
        border: none;
        outline: none;
        background-color: transparent;
        color: white;
    }
    p{color: #BCBCBC;}
`;

const AddedTasksStyle = styled.div`
    li{
        padding: 6px 0 6px 20px;
        border-top: 0.3px solid #BCBCBC;
        list-style: inside;
        color: white;
        font-size: 20px;
        &:lang(ja){
            font-size: 18px;
        }
    }
`;

const AddTaskStyle = styled.div`
    font-size: 27px;
    padding: 6px 0 6px 20px;
    border-top: 0.3px solid #BCBCBC;
    border-bottom: 0.3px solid #BCBCBC;
    p{color: #BCBCBC;}
    input{
        width: 99%;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 20px;
        color: #fff;
    }
`;

const TaskLogRegisterStyle = styled.div`
    padding: 23px 27px 7px 473px;
    p{
    font-size: 20px;
    &:hover, :active{
        cursor: pointer;
        color: #fff;
    }
}
`;
export default Form