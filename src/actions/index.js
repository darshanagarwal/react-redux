import callApi from '../api'
export const GET_ALL_TASK = 'GET_ALL_TASK';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const actFetchTaskRequest = () => {
    return (dispatch) => {
        
        return callApi('/todos', 'GET', null).then(res => {
            dispatch(GetAllItem(res.data));
        });
    }
}

export function GetAllItem(payload){
    return{
        type:'GET_ALL_TASK',
        payload
    }
}

export function AddTask(){
    return{
        type:'ADD_TASK'
    }
}

export function RemoveTask(payload){
    return{
        type:'REMOVE_TASK',
        payload
    }
}
