import { combineReducers } from 'redux';
import {GET_ALL_TASK, ADD_TASK, REMOVE_TASK} from  '../actions';

const initTask = {
    user:{},
    items:[]
}

function todo(state = initTask,action){
	// based on event perform opration
    switch(action.type){
        case GET_ALL_TASK: 
            return{
                ...state,
                items:action.payload
            }
        case ADD_TASK: 
            let existingItem = [...state.items]
            let data = {
                id: existingItem.length + 1,
                title: "Manual " + (existingItem.length + 1),
                userId: 1,
                completed: false
            }
            existingItem.push(data);
            return{
                ...state,
                items: existingItem
            }
        case REMOVE_TASK: 
            return{
                ...state,
                items:state.items.filter(item=>{
                    return item.id!=action.payload.id
                })
            }
        
        default:
            return state;
    }
}
const TaskApp = combineReducers({
    _todo:todo
});
export default TaskApp;