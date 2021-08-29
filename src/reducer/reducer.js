import { ADD_TASKLOG } from '../actions/actions'
const reducer = (state, action) =>{
    switch(action.type) {
        case ADD_TASKLOG:
            return [
                ...state,
                action.TaskLog
            ]

        default:
            return state
    }
}
export default reducer