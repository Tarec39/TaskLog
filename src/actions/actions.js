export const initTaskLog = (taskLogsFromJsonUri) => {
    return{
        type: "INIT_TASKLOGS",
        taskLogsFromJsonUri
    }
}

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

    taskLog = formatTaskLog(taskLog)
    
    return{
        type: "ADD_TASKLOG",
        taskLog
    }
}
