import { ADD_TASKLOG, UPDATE_TASKLOG, DELETE_TASKLOG, UPDATE_TASKGROUPNAME, UPDATE_TASK} from '../actions/actions'
import TaskLogs from '../components/TaskLog'
const initialState = {
    "TaskLogs" : [
        {
            "CreatedDate" : "2010/8/31",
            "TaskGroupName": "SAMPLE_LOG(minutes)",
            "Tasks": [
              {
            "Task": "FirstTask",
            "Date": {
              "8/1": "11",
              "8/2": "50",
              "8/3": "32",
              "8/4": "34",
              "8/5": "21",
              "8/6": "43",
              "8/7": "19",
              "8/8": "50",
              "8/9": "0",
              "8/10": "2",
              "8/11": "16",
              "8/12": "61",
              "8/14": "34",
              "8/15": "",
              "8/16": "",
              "8/17": "",
              "8/18": "",
              "8/19": "",
              "8/20" : "",
            }
              },
              {
            "Task": "SecondTask",
            "Date": {
              "8/1": "2",
              "8/2": "12",
              "8/3": "56",
              "8/4": "29",
              "8/5": "32",
              "8/6": "0",
              "8/7": "0",
              "8/8": "6",
              "8/9": "12",
              "8/10": "26",
              "8/11": "30",
              "8/12": "18",
              "8/14": "20",
              "8/15": "",
              "8/16": "",
              "8/17": "",
              "8/18": "",
              "8/19": "",
              "8/20" : "",
            }
              },
              {
            "Task": "ThirdTask",
            "Date": {
              "8/1": "20",
              "8/2": "0",
              "8/3": "0",
              "8/4": "0",
              "8/5": "10",
              "8/6": "0",
              "8/7": "0",
              "8/8": "2",
              "8/9": "15",
              "8/10": "10",
              "8/11": "4",
              "8/12": "8",
              "8/14": "11",
              "8/15": "",
              "8/16": "",
              "8/17": "",
              "8/18": "",
              "8/19": "",
              "8/20" : "",
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
          const [i, j, k, value] = action.data;

          const nextDate = {
            ...state.TaskLogs[i].Tasks[j].Date,
            [k]: value,
          };
          
          const nextTasks = state.TaskLogs[i].Tasks.map((e, index) => ({
            ...e,
            Date: index === j ? nextDate : e.Date,
          }));
          
          const nextTaskLogs = state.TaskLogs.map((e, index) => ({
            ...e,
            Tasks: index === i ? nextTasks : e.Tasks,
          }));

          return { TaskLogs: nextTaskLogs };
        }
        case UPDATE_TASKGROUPNAME:{
          const [i, taskGroupName] = action.taskGroupName

          const nextTasKLogs = state.TaskLogs.map((e,index)=>(
            {...e, TaskGroupName:index === i? taskGroupName:e.TaskGroupName}
          ))

          return{TaskLogs:nextTasKLogs}

        }
        case DELETE_TASKLOG:{
          return{
            ...state,
            TaskLogs: state.TaskLogs.filter((log, i) => i!==action.index)
          }
        }
        case UPDATE_TASK:{
          const [i, j, value] = action.task
          
          const nextTasks = state.TaskLogs[i].Tasks.map((e, index) => ({
            ...e,
            Task: index === j ? value : e.Task,
          }));
          
          const nextTaskLogs = state.TaskLogs.map((e, index) => ({
            ...e,
            Tasks: index === i ? nextTasks : e.Tasks,
          }));
          return{
            TaskLogs:nextTaskLogs
          }
        }
        default:{
          return state
        }
    }
}

export default reducer

