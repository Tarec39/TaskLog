export const reducer = (taskLogs, action) =>{
    switch(action.type) {
        case 'INIT_TASKLOGS':
            return action.taskLogs
        
        case 'ADD_TASKLOG':
            console.log(action.taskLog)
            return [...taskLogs, action.taskLog]
        default:
            return ''
    }
}
