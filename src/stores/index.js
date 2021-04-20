import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import TaskApp from '../reducers/index'
const store =  createStore(TaskApp,applyMiddleware(thunkMiddleware));
export default store;