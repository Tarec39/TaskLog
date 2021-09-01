export const ADD_TASKLOG = "ADD_TASKLOG"
export const UPDATE_TASKLOG = "UPDATE_TASKLOG"
export const DELETE_TASKLOG = "DELETE_TASKLOG"

export const UPDATE_TASKGROUPNAME = "UPDATE_TASKGROUPNAME"
export const DELETE_TASK = "DELETE_TASK"
export const ADD_TASK = "ADD_TASK"
export const UPDATE_TASK = "UPDATE_TASK"

export const addTaskLog = (taskLog) => {
    const formatTaskLog = (obj) =>{
        let Tasks = obj.Tasks
        let CopyToTasks = []
        
        Object.keys(Tasks).forEach(function(Task, i) {
            var ObjectForTasks = {}
            ObjectForTasks.Task = Tasks[i]
            ObjectForTasks.Date = dateObject()
            CopyToTasks[i] = ObjectForTasks;
        })
        obj.Tasks = CopyToTasks;
        return obj;
    }
    
    const dateObject = () =>{
        const object={}
        var date = new Date()
        
        var start = date.setDate(date.getDate() )
        var startM = date.getMonth() + 1;
        var startD = date.getDate()
        var startY = date.getFullYear()
        
        start = String(startY)+ "-" +String(startM)+"-" + String(startD)
        
        var end = date.setDate(date.getDate() + 14)
        var endM = date.getMonth() + 1
        var endD = date.getDate()
        var endY = date.getFullYear()
        
        end = String(endY)+ "-" +String(endM)+ "-" + String(endD)
        
        
        var startDate = new Date(start)
        var endDate = new Date(end)
        
        for (var d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
            var month = d.getMonth() + 1
            var date_ = d.getDate()
            object[month+"/"+date_] = ""
        }
        return object
    }
    const TaskLog = formatTaskLog(taskLog)

    return{
        type: ADD_TASKLOG,
        TaskLog
    }
}

export const updateTaskLog = (data) =>{

    let dataValue = Object.values(data).join()
    let dataString = Object.keys(data).join('-')
    dataString=dataString.split('-')
    data = []
    dataString.map((dataInt, i) =>{
        if(i===2){data.push(dataInt)
        }else{data.push(parseInt(dataInt, 10))}
    })

    data.push(dataValue)
    return{
        type:UPDATE_TASKLOG,
        data
    }
}

export const deleteTaskLog = (index) =>{
    return{
        type:DELETE_TASKLOG,
        index
    }
}

export const updateTaskGroupName = (taskGroupName) =>{
    let taskGroupNameInt = Object.keys(taskGroupName).join('')
    taskGroupNameInt = parseInt(taskGroupNameInt,10) 
    let taskGroupNameValue = Object.values(taskGroupName).join('')
    taskGroupName = [taskGroupNameInt, taskGroupNameValue]
    
    return{
        type:UPDATE_TASKGROUPNAME,
        taskGroupName
    }
}

export const updateTask = (task) =>{
    const taskValue = Object.values(task).join('')
    let taskInt = Object.keys(task).join('-')
    taskInt = taskInt.split('-')
    task = []
    taskInt.map((taskI) =>{
        task.push(parseInt(taskI, 10))
    })
    task.push(taskValue)
    console.log(task)
    // console.log(taskValue)

    return{
        type: UPDATE_TASK,
        task
    }
}