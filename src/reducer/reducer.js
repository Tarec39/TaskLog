import { ADD_TASKLOG } from '../actions/actions'
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
                "TaskLogs" :[...state.TaskLogs, action.TaskLog]
            }
          }

        default:{
          return state
        }
    }
}

export default reducer