import {ADD_TASK, DELETE_TASK, COMPLETE_TASK} from "./actions"

const initialData = {
    taskItems: []
}

const taskReducer = (state = initialData, action) => {
    switch(action.type) {
        case ADD_TASK:
            return {
                ...state,
                taskItems: [...state.taskItems, {text: action.payload, completed: false}]
            }
        case DELETE_TASK:
            return {
                ...state,
                taskItems: [...state.taskItems.filter((task) => task.text !== action.payload)]
            }
        case COMPLETE_TASK:
            let updatedTaskItems = []
            state.taskItems.map((task)=>{
                if(task.text === action.payload){
                    if(task.completed === true) {
                        task.completed = false
                    } else {
                        task.completed = true
                    }
                }
                updatedTaskItems.push(task)
            })
            return {
                ...state,
                taskItems: updatedTaskItems
            }
            default:
                return state;
    }
}

export default taskReducer