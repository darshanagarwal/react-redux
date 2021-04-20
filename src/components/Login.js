import React, { Component } from 'react'
import {connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: false,
            errorMessage:""
        }
        this.setPassword = this.setPassword.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
       
    }

    setUsername(event) {    this.setState({username: event.target.value});  }
    setPassword(event) {    this.setState({password: event.target.value});  }
   
    handleSubmit () {
        let user = localStorage.getItem('user');
        if(user != null) {
            let data = JSON.parse(user);
            if (data.username == this.state.username && data.password == this.state.password) {
                data.loggedOff = false;
                localStorage.setItem("user", JSON.stringify(data))
                this.props.history.push(`/home`)
            } else {
                this.setState({error: true, errorMessage: "Invalid username or password"})
            }
        } else if(this.state.username == "admin" && this.state.password =="admin") {
            let userData = {username: this.state.username, password: this.state.password, loggedOff: false}
            localStorage.setItem("user", JSON.stringify(userData))
            this.props.history.push(`/home`)
        } else {
            this.setState({error: true, errorMessage: "Invalid username or password"})
        }
        
    }
    
    render() {
        
        return(
            <div className=" align-items-center">
                <Form >
                    <Form.Group size="lg" controlId="email">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={this.state.username}
                        onChange={this.setUsername}
                    />
                     {this.state.error && this.state.email =="" ?<div className="error"> Email is empty</div> : ""}
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={this.state.password}
                        onChange={this.setPassword}
                    />
                     {this.state.error && this.state.password =="" ?<div className="error"> Password is empty</div> : ""}
                    </Form.Group>
                    {this.state.error ?<div className="error"> {this.state.errorMessage}</div> : ""}
                    <Button block size="lg" type="button" onClick={this.handleSubmit}>
                        Login
                    </Button>
                </Form>
            </div>
        )
        
    }
}

const mapStateToProps = state =>{
    return {
         user: state._todo.user,
       };
}
function mapDispatchToProps(dispatch){
    return{
       
     
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
