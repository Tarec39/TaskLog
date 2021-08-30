import React , { useState, useEffect }from 'react'
import {  useSelector} from 'react-redux'
import { connect } from 'react-redux'
import {store} from '../store/store'
import styled from 'styled-components'

const TaskLogs = () =>{
    const TaskLogs = useSelector(state=>state.TaskLogs)
    const [notice, setNotice] = useState("")
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
                    <TaskGroupName Name={TaskLogs[i]["TaskGroupName"]}/>
                    <ContentStyle>
                    <table>
                        <tbody>
                            <Dates Tasks={TaskLogs[i]["Tasks"]}/>
                        </tbody>
                            <TasknData Tasks={TaskLogs[i]["Tasks"]}/>
                    </table>

                    </ContentStyle>
                </TaskLogStyle>
            ))}

            <button onClick={(e)=>{
                e.preventDefault()
                console.dir(TaskLogs)
            }}>seeUseSelector</button>
        </TaskLogsStyle>
    )
}

const TaskGroupName = ({Name}) =>{
    return(
        <TaskGroupNameStyle>{Name}</TaskGroupNameStyle>
    )
}

const Dates = ({Tasks}) =>{
    let Task=Tasks[0]["Date"]
    return(
        <DatesStyle>
            <BlankStyle></BlankStyle>
            {Object.keys(Task).map((date, i) =>(
                <DateStyle key={i}>{date}</DateStyle>
            ))}
        </DatesStyle> 
    )
}
const TasknData = ({Tasks}) =>{
    return(
        <tfoot>
            {Object.keys(Tasks).map((Task, i) =>(
                <TasknDataStyle key={i}>
                <TaskStyle>{Tasks[i]["Task"]}</TaskStyle>
                {Object.keys(Tasks[i]["Date"]).map((key, j)=>(
                    <DataStyle key={j}><input value={Tasks[i]["Date"][key]}/></DataStyle>
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
    padding: 24px 79px 24px 31px;
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
    font-weight: normal;
    border: 0.3px solid #4F5052;
    font-size: 17px;
    background-color: #4F5052;
    border-top: none;
    font-size: 17px;
    padding: 8px 23px
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
    padding: 5px 13px 0 30px;
    border-left: none;
    background-color: #4F5052;
    &:before{
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        width: 100%;
        height: 100%;
        border: 0.3px solid #4F5052;
    }
`;
const DataStyle = styled.td`
    font-weight: normal;
    border: 0.3px solid #4F5052;
    font-size: 17px;
    text-align: center;
    input{
        width: 36.5px;
        // display: block;
        font-size: 17px;
        color: white;
        // width: 100%;
        text-align: center;
        border: none;
        outline: none;
        background-color: transparent;
    }
`;

const mapStateToProps = state =>({
    state: state.TaskLogs
})

export default connect(mapStateToProps)(TaskLogs)