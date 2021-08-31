import { ADD_TASKLOG, UPDATE_TASKLOG, DELETE_TASKLOG, UPDATE_TASKGROUPNAME} from '../actions/actions'
import TaskLogs from '../components/TaskLog'
const initialState = {
    "TaskLogs" : [
        {
            "CreatedDate" : "2010/8/31",
            "TaskGroupName": "SAMPLE_TITLE",
            "Tasks": [
              {
            "Task": "FirstTask",
            "Date": {
              "8/1": "11",
              "8/2": "",
              "8/3": "",
              "8/4": "",
              "8/5": "",
              "8/6": "",
              "8/7": "",
              "8/8": "",
              "8/9": "",
              "8/10": "",
              "8/11": "",
              "8/12": "",
              "8/14": ""
            }
              },
              {
            "Task": "SecondTask",
            "Date": {
              "8/1": "2",
              "8/2": "",
              "8/3": "",
              "8/4": "",
              "8/5": "",
              "8/6": "",
              "8/7": "",
              "8/8": "",
              "8/9": "",
              "8/10": "",
              "8/11": "",
              "8/12": "",
              "8/14": ""
            }
              },
              {
            "Task": "ThirdTask",
            "Date": {
              "8/1": "300",
              "8/2": "",
              "8/3": "",
              "8/4": "",
              "8/5": "",
              "8/6": "",
              "8/7": "",
              "8/8": "",
              "8/9": "",
              "8/10": "",
              "8/11": "",
              "8/12": "",
              "8/14": ""
            }
              }
            ]
        },
    ]
}

const reducer = (state = initialState, action) =>{
    switch(action.type) {
        case ADD_TASKLOG:{
            return {
                ...state,
                TaskLogs :[...state.TaskLogs, action.TaskLog]
            }
          }
        
        case UPDATE_TASKLOG:{
          let i = action.data[0]
          let j = action.data[1]
          let k = action.data[2]
          let value = action.data[3]

          return {
            ...state,
            TaskLogs: state.TaskLogs[i].map((TaskLog, x) => x===)
          }
        }
        case UPDATE_TASKGROUPNAME:{
          let i = action.taskGroupName[0]
          let taskGroupName = action.taskGroupName[1]

          return{
            ...state,
            TaskLogs:{
              ...state.TaskLogs,
              [i]:{
                ...state.TaskLogs[i],
                TaskGroupName: taskGroupName
              }
            }
          }
        }
        case DELETE_TASKLOG:{
          // delete state.TaskLogs[action.index]
          return{
            ...state,
            TaskLogs: state.TaskLogs.filter((log, i) => i!==action.index)
          }
        }
        default:{
          return state
        }
    }
}

export default reducer