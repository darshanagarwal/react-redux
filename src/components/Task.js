import React, { Component } from 'react'
import {actFetchTaskRequest, AddTask, RemoveTask} from '../actions'
import {connect} from 'react-redux';
import Button from "react-bootstrap/Button";
export class Task extends Component {
    constructor(props) {
        super(props)
       
    }

    componentDidMount(){
        let user =localStorage.getItem('user')
        if(user == null) {
            this.props.history.push('/')
        } else {
            let data = JSON.parse(user);
            if(data.loggedOff== true) {
                this.props.history.push('/')
            } else {
                this.props.actFetchTaskRequest();
            }
            
        }
    }
    
    render() {
        const task = this.props.task;
        console.log(task.length)
        if(task.length>0){
           return (
                <div className="row" style={{marginTop:'10px'}}>
                    <div className="col-md-2">
                        <div className="pt-4">
                            <Button className="truncate-overflow" onClick={()=>this.props.AddTask()}>Add Task</Button>
                            
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            {
                                task.map((item,index)=>(
									<>
                                      <div className="col-md-2">
										<div className="pt-4">
										  <h5 className="truncate-overflow">{item.id}</h5>
										  
										</div>
									  </div>
									  <div className="col-md-6">
										<div className="pt-4">
										  <h5 className="truncate-overflow">{item.title}</h5>
										  
										</div>
									  </div>
                                      <div className="col-md-2">
										<div className="pt-4">
                                            <h5 className="truncate-overflow">{item.completed? ('True'): ('False')}</h5>
										  
										</div>
									  </div>
                                      <div className="col-md-2">
										<div className="pt-4">
										  <Button className="truncate-overflow" onClick={()=>this.props.RemoveTask(item)}>Delete</Button>
										  
										</div>
									  </div>
									</>
                                    
                                    
                                ))
                            }
                        </div>
                    </div>
                </div>
            ) 
        }
        return(
            <div className="row">
                <h2>Loading...!</h2>
            </div>
        )
        
    }
}

const mapStateToProps = state =>{
    return {
         task: state._todo.items,
       };
}
function mapDispatchToProps(dispatch){
    return{
        actFetchTaskRequest:()=>dispatch(actFetchTaskRequest()),
        AddTask:()=>dispatch(AddTask()),
        RemoveTask:(item)=>dispatch(RemoveTask(item)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Task)
