import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reducer  from '../reducer/reducer'

const TaskLogs = [
      {
        "CreatedDate": "2021-8-1",
        "TaskGroupName": "テスト",
        "Tasks": [
          {
              "Task": "FirstTask",
              "Data": {
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
              "Data": {
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
              "Data": {
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
      }
    ]

export const store = createStore(reducer, TaskLogs, applyMiddleware(logger))

